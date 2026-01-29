import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  services: {
    accountingBookkeeping: boolean;
    auditAssurance: boolean;
    taxAdvisory: boolean;
    companySecretarial: boolean;
  };
}

interface ContactEmailPayload {
  formData: ContactFormData;
  timestamp: string;
}

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT || '587'),
  secure: process.env.MAIL_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

function formatContactFormForEmail(data: ContactFormData): string {
  const selectedServices = Object.entries(data.services)
    .filter(([_, selected]) => selected)
    .map(([service, _]) => {
      const serviceNames: Record<string, string> = {
        accountingBookkeeping: 'Accounting & Bookkeeping',
        auditAssurance: 'Audit & Assurance',
        taxAdvisory: 'Tax & Business Advisory',
        companySecretarial: 'Company Secretarial',
      };
      return serviceNames[service] || service;
    })
    .join(', ');

  return `
New Contact Inquiry - LEAP by LLL

═══════════════════════════════════════
CONTACT INFORMATION
═══════════════════════════════════════

Name:               ${data.name}
Email:              ${data.email}
Company:            ${data.company}

═══════════════════════════════════════
SERVICES OF INTEREST
═══════════════════════════════════════

Selected Services:  ${selectedServices || 'None selected'}

═══════════════════════════════════════
MESSAGE
═══════════════════════════════════════

${data.message}
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const payload: ContactEmailPayload = await request.json();
    const { formData, timestamp } = payload;

    const emailBody = formatContactFormForEmail(formData);
    const subject = `New Contact Inquiry - ${formData.name} - LEAP by LLL`;

    // Send email using Nodemailer
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || 'noreply@lll.com.hk',
      to: process.env.MAIL_TO || 'leap@lll.com.hk',
      replyTo: formData.email, // Allow direct reply to the sender
      subject: subject,
      text: emailBody,
      // Optional: Add HTML version for better formatting
      html: `<pre style="font-family: monospace; font-size: 14px;">${emailBody}</pre>`,
    });

    console.log('Contact form email sent successfully via Nodemailer');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);

    return NextResponse.json({
      success: true,
      message: 'Contact form sent successfully',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);

    // More specific error handling for email errors
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      return NextResponse.json(
        { success: false, error: `Failed to send email: ${error.message}` },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 },
    );
  }
}
