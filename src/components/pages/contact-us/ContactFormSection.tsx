"use client";

import { useTranslations } from "next-intl";
import { useState, FormEvent } from "react";
import { Button } from "@/components/button";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Badge } from "@/components/badge";
import { Link } from "@/i18n/navigation";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ValidationErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export default function ContactFormSection() {
  const t = useTranslations("contactUs.form");
  const tPage = useTranslations("contactUs");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    services: {
      accountingBookkeeping: false,
      auditAssurance: false,
      taxAdvisory: false,
      companySecretarial: false,
    },
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("errorRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("errorRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("errorInvalidEmail");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("errorRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for this field
    if (errors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleServiceChange = (
    service: keyof typeof formData.services,
    checked: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: checked,
      },
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          services: {
            accountingBookkeeping: false,
            auditAssurance: false,
            taxAdvisory: false,
            companySecretarial: false,
          },
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="relative overflow-hidden py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <svg
                  className="h-10 w-10 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <Heading as="h2">{t("successTitle")}</Heading>
              <Subheading className="mt-4">{t("successMessage")}</Subheading>
              <div className="mt-8 flex justify-center">
                <Button onClick={() => setStatus("idle")}>
                  {t("successBackButton")}
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="relative overflow-hidden py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                <svg
                  className="h-10 w-10 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <Heading as="h2">{t("errorTitle")}</Heading>
              <Subheading className="mt-4">{t("errorMessage")}</Subheading>
              <div className="mt-8">
                <Button onClick={() => setStatus("idle")}>
                  {t("errorRetryButton")}
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Badge>{tPage("title")}</Badge>
            <Heading as="h1" className="mt-4">
              {tPage("subtitle")}
            </Heading>
            <Subheading className="mt-4">{tPage("description")}</Subheading>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 md:p-8"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {t("name")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {t("email")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {t("company")}
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                />
              </div>

              {/* Services of Interest */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  {t("servicesInterest")}
                </label>
                <div className="space-y-2">
                  {Object.keys(formData.services).map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={
                          formData.services[
                          service as keyof typeof formData.services
                          ]
                        }
                        onChange={(e) =>
                          handleServiceChange(
                            service as keyof typeof formData.services,
                            e.target.checked
                          )
                        }
                        className="h-5 w-5 rounded border-neutral-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700"
                      />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        {t(`servicesList.${service}`)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {t("message")} <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? t("submitting") : t("submit")}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
