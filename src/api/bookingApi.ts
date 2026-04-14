import { apiClientWithAuth } from "./axios";
import type { Booking, BookingCreate, BookingUpdate } from "../types/booking";

export const bookingApi = {
  getMy: async (): Promise<Booking[]> => {
    const res = await apiClientWithAuth.get("/bookings/me");
    return res.data;
  },

  create: async (data: BookingCreate): Promise<Booking> => {
    const res = await apiClientWithAuth.post("/bookings", data);
    return res.data;
  },

  update: async (id: string, data: BookingUpdate): Promise<Booking> => {
    const res = await apiClientWithAuth.patch(`/bookings/${id}`, data);
    return res.data;
  },

  cancel: async (id: string): Promise<Booking> => {
    const res = await apiClientWithAuth.patch(`/bookings/${id}/cancel`);
    return res.data;
  },

  confirm: async (id: string): Promise<Booking> => {
    const res = await apiClientWithAuth.patch(`/bookings/${id}/confirm`);
    return res.data;
  },
};