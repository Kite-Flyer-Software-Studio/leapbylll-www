import { NextRequest, NextResponse } from 'next/server';
import { EmailPayload, QuoteFormData } from '@/types/quote-form';

/**
 * API Route for sending quote request emails using Nodemailer with SMTP
 *
 * Required Environment Variables:
 * - MAIL_HOST=smtp.example.com (your SMTP server)
 * - MAIL_PORT=587 (use 465 for SSL, 587 for TLS)
 * - MAIL_USER=your-email@example.com
 * - MAIL_PASSWORD=your-password
 * - MAIL_FROM=noreply@lll.com.hk (sender email address)
 * - MAIL_TO=leap@lll.com.hk (recipient email address)
 *
 * Installation:
 * npm install nodemailer @types/nodemailer
 *
 * Vercel Deployment:
 * - Add environment variables in Vercel Dashboard → Project Settings → Environment Variables
 * - Set for all environments (Production, Preview, Development)
 * - Redeploy after adding variables
 */

import nodemailer from 'nodemailer';

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

function formatFormDataForEmail(data: QuoteFormData): string {
  const selectedServices = Object.entries(data.services)
    .filter(([_, selected]) => selected)
    .map(([service, _]) => {
      const serviceNames: Record<string, string> = {
        accountingBookkeeping: 'Accounting & Bookkeeping',
        auditServices: 'Audit Services',
        taxComputationFiling: 'Tax Computation & Filing (Profits Tax)',
        employerReturnFiling: "Employer's Return Filing",
        companySecretaryServices: 'Company Secretary Services',
        taxEnquiryCase: 'Tax Enquiry Case',
        other: `Other: ${data.otherServiceDetails}`,
      };
      return serviceNames[service] || service;
    })
    .join(', ');

  const companyTypeLabels: Record<string, string> = {
    'newly-incorporated':
      'Newly incorporated company / company with minimal transactions',
    'active-sme': 'Active Small & Medium-sized Enterprise',
    established: 'Established company',
  };

  const transactionLabels: Record<string, string> = {
    'up-to-25': 'Up to 25 bank transactions per month',
    'up-to-100': 'Up to 100 transactions per month',
    'more-than-100': 'More than 100 transactions per month',
  };

  const bankAccountLabels: Record<string, string> = {
    '1': '1 bank account',
    'up-to-3': 'Up to 3 bank accounts',
    'more-than-3': 'More than 3 bank accounts',
  };

  const turnoverLabels: Record<string, string> = {
    '1m': 'Up to HKD 1 million',
    '1-10m': 'HKD 1 - 10 million',
    '10-50m': 'HKD 10 - 50 million',
    '50m+': 'More than HKD 50 million',
  };

  return `
New Quote Request - LEAP by LLL

═══════════════════════════════════════
CLIENT INFORMATION
═══════════════════════════════════════

Company Name:        ${data.companyName}
Nature of Business:  ${data.natureOfBusiness}
Company Type:        ${companyTypeLabels[data.companyType] || data.companyType}
Contact Person:      ${data.contactPerson}
Position:            ${data.position}
Email:               ${data.email}
Phone:               ${data.phone}

═══════════════════════════════════════
SERVICE REQUIREMENTS
═══════════════════════════════════════

Selected Services:   ${selectedServices}

═══════════════════════════════════════
BUSINESS DETAILS
═══════════════════════════════════════

Transactions/Month:  ${transactionLabels[data.transactionsPerMonth] || data.transactionsPerMonth}
Bank Accounts:       ${bankAccountLabels[data.numberOfBankAccounts] || data.numberOfBankAccounts}
Employees:           ${data.numberOfEmployees}
Annual Turnover:     ${turnoverLabels[data.annualTurnover] || data.annualTurnover}
  `.trim();
}

function formatFeeEstimates(payload: EmailPayload): string {
  const { feeEstimates } = payload;

  if (!feeEstimates.accountingBookkeeping && !feeEstimates.auditServices) {
    return '';
  }

  let estimatesText =
    '\n\n═══════════════════════════════════════\nESTIMATED FEES\n═══════════════════════════════════════\n\n';

  if (feeEstimates.accountingBookkeeping) {
    const { min, max } = feeEstimates.accountingBookkeeping;
    const range = max
      ? `HKD ${min.toLocaleString()} - ${max.toLocaleString()}`
      : `From HKD ${min.toLocaleString()}`;
    estimatesText += `Accounting & Bookkeeping:  ${range} / month\n`;
  }

  if (feeEstimates.auditServices) {
    const { min, max } = feeEstimates.auditServices;
    const range = max
      ? `HKD ${min.toLocaleString()} - ${max.toLocaleString()}`
      : `From HKD ${min.toLocaleString()}`;
    estimatesText += `Audit Services:            ${range}\n`;
  }

  return estimatesText;
}

export async function POST(request: NextRequest) {
  try {
    const payload: EmailPayload = await request.json();
    const { formData, feeEstimates, timestamp } = payload;

    const emailBody =
      formatFormDataForEmail(formData) + formatFeeEstimates(payload);
    const subject = `New Quote Request - ${formData.companyName} - LEAP by LLL`;

    // Send email using Nodemailer
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || 'noreply@lll.com.hk',
      to: process.env.MAIL_TO || 'leap@lll.com.hk',
      subject: subject,
      text: emailBody,
      // Optional: Add HTML version for better formatting
      html: `<pre style="font-family: monospace; font-size: 14px;">${emailBody}</pre>`,
    });

    console.log('Quote email sent successfully via Nodemailer');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);

    return NextResponse.json({
      success: true,
      message: 'Quote request sent successfully',
    });
  } catch (error) {
    console.error('Error processing quote request:', error);

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
