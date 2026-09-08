export type PaymentIntent = {
  provider: string;
  providerRef: string;
  checkoutUrl?: string;
};

export type CreatePaymentInput = {
  amount: number;
  currency: string;
  description: string;
  metadata: Record<string, string>;
};

export interface PaymentProvider {
  createPayment(input: CreatePaymentInput): Promise<PaymentIntent>;
  verifyWebhook(payload: string, signature: string): Promise<Record<string, unknown>>;
}

/**
 * Payment abstraction.
 * Implement certified providers here (card processor, crypto processor,
 * Ethiopian bank/local wallet rails, etc.). Never collect raw card PAN/CVV
 * on the RIGHT server.
 */
export class ProviderNotConfigured implements PaymentProvider {
  async createPayment(): Promise<PaymentIntent> {
    throw new Error("No payment provider is configured.");
  }
  async verifyWebhook(): Promise<Record<string, unknown>> {
    throw new Error("No payment provider is configured.");
  }
}
