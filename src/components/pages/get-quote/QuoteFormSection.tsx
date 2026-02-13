"use client";

import { useTranslations } from "next-intl";
import { useState, FormEvent } from "react";
import {
  QuoteFormData,
  ValidationErrors,
  FeeEstimate,
  FormStatus,
} from "@/types/quote-form";
import { Button } from "@/components/button";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Badge } from "@/components/badge";
import { Link } from "@/i18n/navigation";

export default function QuoteFormSection() {
  const t = useTranslations("getQuote.form");
  const tPage = useTranslations("getQuote");

  const [formData, setFormData] = useState<QuoteFormData>({
    companyName: "",
    natureOfBusiness: "",
    companyType: "",
    contactPerson: "",
    position: "",
    email: "",
    phone: "",
    services: {
      accountingBookkeeping: false,
      auditServices: false,
      taxComputationFiling: false,
      employerReturnFiling: false,
      companySecretaryServices: false,
      taxEnquiryCase: false,
      other: false,
    },
    otherServiceDetails: "",
    transactionsPerMonth: "",
    numberOfBankAccounts: "",
    numberOfEmployees: "",
    annualTurnover: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feeEstimates, setFeeEstimates] = useState<FeeEstimate>({});

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Section 1 validation
    if (!formData.companyName.trim())
      newErrors.companyName = t("errorRequired");
    if (!formData.natureOfBusiness.trim())
      newErrors.natureOfBusiness = t("errorRequired");
    if (!formData.companyType) newErrors.companyType = t("errorRequired");
    if (!formData.contactPerson.trim())
      newErrors.contactPerson = t("errorRequired");
    if (!formData.position.trim()) newErrors.position = t("errorRequired");

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t("errorRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("errorInvalidEmail");
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = t("errorRequired");
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, "");
      if (digitsOnly.length < 8) {
        newErrors.phone = t("errorPhoneTooShort");
      } else if (digitsOnly.length > 15) {
        newErrors.phone = t("errorPhoneTooLong");
      }
    }

    // Section 2 validation
    const hasSelectedService = Object.values(formData.services).some(
      (v) => v === true
    );
    if (!hasSelectedService) {
      newErrors.services = t("errorSelectService");
    }

    if (formData.services.other && !formData.otherServiceDetails.trim()) {
      newErrors.otherServiceDetails = t("errorRequired");
    }

    // Section 3 validation
    if (!formData.transactionsPerMonth)
      newErrors.transactionsPerMonth = t("errorRequired");
    if (!formData.numberOfBankAccounts)
      newErrors.numberOfBankAccounts = t("errorRequired");
    if (!formData.numberOfEmployees)
      newErrors.numberOfEmployees = t("errorRequired");
    if (!formData.annualTurnover)
      newErrors.annualTurnover = t("errorRequired");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateFees = (): FeeEstimate => {
    const estimates: FeeEstimate = {};

    // Accounting & Bookkeeping fee calculation
    if (formData.services.accountingBookkeeping) {
      if (
        formData.transactionsPerMonth === "up-to-25" ||
        formData.annualTurnover === "1m"
      ) {
        estimates.accountingBookkeeping = { min: 800, max: 1000 };
      } else if (
        formData.transactionsPerMonth === "up-to-100" ||
        formData.annualTurnover === "1-10m"
      ) {
        estimates.accountingBookkeeping = { min: 1500, max: 2500 };
      } else if (
        formData.transactionsPerMonth === "more-than-100" ||
        formData.annualTurnover === "10-50m" ||
        formData.annualTurnover === "50m+"
      ) {
        estimates.accountingBookkeeping = { min: 3500, max: null };
      }
    }

    // Audit Services fee calculation
    if (formData.services.auditServices) {
      if (
        formData.companyType === "newly-incorporated" ||
        formData.annualTurnover === "1m"
      ) {
        estimates.auditServices = { min: 10000, max: 20000 };
      } else if (
        formData.companyType === "active-sme" ||
        formData.annualTurnover === "1-10m"
      ) {
        estimates.auditServices = { min: 20000, max: 45000 };
      } else if (
        formData.companyType === "established" ||
        formData.annualTurnover === "10-50m" ||
        formData.annualTurnover === "50m+"
      ) {
        estimates.auditServices = { min: 50000, max: null };
      }
    }

    return estimates;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    const estimates = calculateFees();
    setFeeEstimates(estimates);

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
          feeEstimates: estimates,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const handleInputChange = (
    field: keyof QuoteFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for this field
    if (errors[field]) {
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

    if (errors.services) {
      setErrors((prev) => ({
        ...prev,
        services: undefined,
      }));
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
                <Button as={Link} href="/">
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
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <Badge>{tPage("title")}</Badge>
            <Heading as="h1" className="mt-4">
              {tPage("subtitle")}
            </Heading>
            <Subheading className="mt-4">{tPage("description")}</Subheading>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-12">
            {/* Section 1: Company Information */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
              <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {t("section1Title")}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <FormInput
                  label={t("companyName")}
                  value={formData.companyName}
                  onChange={(val) => handleInputChange("companyName", val)}
                  error={errors.companyName}
                  required
                />
                <FormInput
                  label={t("natureOfBusiness")}
                  value={formData.natureOfBusiness}
                  onChange={(val) => handleInputChange("natureOfBusiness", val)}
                  error={errors.natureOfBusiness}
                  required
                />
                <FormSelect
                  label={t("companyType")}
                  value={formData.companyType}
                  onChange={(val) => handleInputChange("companyType", val)}
                  error={errors.companyType}
                  options={[
                    {
                      value: "newly-incorporated",
                      label: t("companyTypeOptions.newlyIncorporated"),
                    },
                    {
                      value: "active-sme",
                      label: t("companyTypeOptions.activeSME"),
                    },
                    {
                      value: "established",
                      label: t("companyTypeOptions.established"),
                    },
                  ]}
                  required
                />
                <FormInput
                  label={t("contactPerson")}
                  value={formData.contactPerson}
                  onChange={(val) => handleInputChange("contactPerson", val)}
                  error={errors.contactPerson}
                  required
                />
                <FormInput
                  label={t("position")}
                  value={formData.position}
                  onChange={(val) => handleInputChange("position", val)}
                  error={errors.position}
                  required
                />
                <FormInput
                  label={t("email")}
                  type="email"
                  value={formData.email}
                  onChange={(val) => handleInputChange("email", val)}
                  error={errors.email}
                  required
                />
                <FormInput
                  label={t("phone")}
                  type="tel"
                  value={formData.phone}
                  onChange={(val) => handleInputChange("phone", val)}
                  error={errors.phone}
                  required
                />
              </div>
            </div>

            {/* Section 2: Service Requirements */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
              <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {t("section2Title")}
              </h2>
              <div className="space-y-4">
                <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {t("services")} *
                </div>
                {Object.keys(formData.services).map((service) => (
                  <FormCheckbox
                    key={service}
                    label={t(`servicesList.${service}`)}
                    checked={
                      formData.services[
                      service as keyof typeof formData.services
                      ]
                    }
                    onChange={(checked) =>
                      handleServiceChange(
                        service as keyof typeof formData.services,
                        checked
                      )
                    }
                  />
                ))}
                {errors.services && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.services}
                  </p>
                )}
                {formData.services.other && (
                  <div className="mt-4">
                    <FormInput
                      label={t("otherServiceDetails")}
                      value={formData.otherServiceDetails}
                      onChange={(val) =>
                        handleInputChange("otherServiceDetails", val)
                      }
                      error={errors.otherServiceDetails}
                      required
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Section 3: Business Details */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
              <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {t("section3Title")}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <FormSelect
                  label={t("transactionsPerMonth")}
                  value={formData.transactionsPerMonth}
                  onChange={(val) =>
                    handleInputChange("transactionsPerMonth", val)
                  }
                  error={errors.transactionsPerMonth}
                  options={[
                    {
                      value: "up-to-25",
                      label: t("transactionsOptions.upTo25"),
                    },
                    {
                      value: "up-to-100",
                      label: t("transactionsOptions.upTo100"),
                    },
                    {
                      value: "more-than-100",
                      label: t("transactionsOptions.moreThan100"),
                    },
                  ]}
                  required
                />
                <FormSelect
                  label={t("numberOfBankAccounts")}
                  value={formData.numberOfBankAccounts}
                  onChange={(val) =>
                    handleInputChange("numberOfBankAccounts", val)
                  }
                  error={errors.numberOfBankAccounts}
                  options={[
                    { value: "1", label: t("bankAccountsOptions.one") },
                    { value: "up-to-3", label: t("bankAccountsOptions.upTo3") },
                    {
                      value: "more-than-3",
                      label: t("bankAccountsOptions.moreThan3"),
                    },
                  ]}
                  required
                />
                <FormInput
                  label={t("numberOfEmployees")}
                  type="number"
                  value={formData.numberOfEmployees}
                  onChange={(val) => handleInputChange("numberOfEmployees", val)}
                  error={errors.numberOfEmployees}
                  required
                />
                <FormSelect
                  label={t("annualTurnover")}
                  value={formData.annualTurnover}
                  onChange={(val) => handleInputChange("annualTurnover", val)}
                  error={errors.annualTurnover}
                  options={[
                    { value: "1m", label: t("turnoverOptions.upTo1m") },
                    { value: "1-10m", label: t("turnoverOptions.1to10m") },
                    { value: "10-50m", label: t("turnoverOptions.10to50m") },
                    { value: "50m+", label: t("turnoverOptions.50mPlus") },
                  ]}
                  required
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? t("submitting") : t("submit")}
              </Button>
            </div>
          </form>
        </div>
      </Container >
    </div >
  );
}

// Helper Components
const FormInput = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

const FormSelect = ({
  label,
  value,
  onChange,
  options,
  error,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
}) => {
  const t = useTranslations("getQuote.form");

  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
      >
        <option value="">{t("selectPlaceholder")}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

const FormCheckbox = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5 rounded border-neutral-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-neutral-700"
      />
      <span className="text-sm text-neutral-700 dark:text-neutral-300">
        {label}
      </span>
    </label>
  );
};
