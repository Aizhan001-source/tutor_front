import { create } from "zustand";
import { paymentApi } from "../api/paymentApi";
import type { Payment } from "../types/payment";

interface PaymentState {
  payments: Payment[];
  isLoading: boolean;
  error: string | null;

  fetchMy: () => Promise<void>;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  payments: [],
  isLoading: false,
  error: null,

  fetchMy: async () => {
    try {
      set({ isLoading: true, error: null });

      const data = await paymentApi.getMyPayments();

      set({ payments: data, isLoading: false });
    } catch (err: any) {
      set({
        error: err?.response?.data?.detail || "Error loading payments",
        isLoading: false,
      });
    }
  },
}));