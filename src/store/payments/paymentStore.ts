import { create } from "zustand";
import { paymentApi } from "../../api/payments/paymentApi";
import type { Payment } from "../../types/payment";

interface PaymentState {
  payments: Payment[];
  payment: Payment | null;
  isLoading: boolean;
  error: string | null;

  fetchPayments: () => Promise<void>;
  fetchPaymentById: (id: string) => Promise<void>;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  payments: [],
  payment: null,
  isLoading: false,
  error: null,

  fetchPayments: async () => {
    try {
      set({ isLoading: true, error: null });

      const data = await paymentApi.getAll();

      set({
        payments: data,
        isLoading: false,
      });
    } catch (e: any) {
      set({
        error: e.message || "Error fetching payments",
        isLoading: false,
      });
    }
  },

  fetchPaymentById: async (paymentId: string) => {
    try {
      set({ isLoading: true });

      const data = await paymentApi.getById(paymentId);

      set({
        payment: data,
        isLoading: false,
      });
    } catch (e: any) {
      set({
        error: e.message || "Error fetching payment",
        isLoading: false,
      });
    }
  },
}));