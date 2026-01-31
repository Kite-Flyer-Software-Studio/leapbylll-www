export type PricingPeriod = 'monthly' | 'yearly' | 'one-time';

export interface Service {
  id: string;
  name: string;
  description: string;
  price?: number;
  period: PricingPeriod;
  included?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  services: Service[];
  customCTA?: {
    text: string;
    action: string;
  };
}

export interface CostBreakdown {
  monthly: number;
  yearly: number;
  oneTime: number;
}
