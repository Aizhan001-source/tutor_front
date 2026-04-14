import { apiClientWithAuth } from "./axios";
import type { Payment } from "../types/payment";

export const paymentApi = {
  getMyPayments: async (): Promise<Payment[]> => {
    const res = await apiClientWithAuth.get("/payments/me");
    return res.data;
  },

  pay: async (bookingId: string): Promise<Payment> => {
    const res = await apiClientWithAuth.post(`/payments/${bookingId}/pay`);
    return res.data;
  },

  refund: async (paymentId: string): Promise<Payment> => {
    const res = await apiClientWithAuth.post(`/payments/${paymentId}/refund`);
    return res.data;
  },
};