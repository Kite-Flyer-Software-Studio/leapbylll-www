export interface QuoteFormData {
  companyName: string;
  natureOfBusiness: string;
  companyType: string;
  contactPerson: string;
  position: string;
  email: string;
  phone: string;
  services: {
    accountingBookkeeping: boolean;
    auditServices: boolean;
    taxComputationFiling: boolean;
    employerReturnFiling: boolean;
    companySecretaryServices: boolean;
    taxEnquiryCase: boolean;
    other: boolean;
  };
  otherServiceDetails: string;
  transactionsPerMonth: string;
  numberOfBankAccounts: string;
  numberOfEmployees: string;
  annualTurnover: string;
}

export interface ValidationErrors {
  [key: string]: string | undefined;
}

export interface FeeEstimate {
  accountingBookkeeping?: {
    min: number;
    max: number | null;
  };
  auditServices?: {
    min: number;
    max: number | null;
  };
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface EmailPayload {
  formData: QuoteFormData;
  feeEstimates: FeeEstimate;
  timestamp: string;
}
