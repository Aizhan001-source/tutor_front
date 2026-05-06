import { api } from "../api";
import type { Payment } from "../../types/payment";

export const paymentApi = {
  getAll: async (): Promise<Payment[]> => {
    const res = await api.get("/payments/");
    return res.data;

  },

  getById: async (paymentId: string): Promise<Payment> => {
    const res = await api.get(`/payments/${paymentId}`);
    return res.data;

  },

};