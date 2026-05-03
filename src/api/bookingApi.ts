import { api } from "./axios";
import type { Booking, BookingCreate } from "../types/booking";

export const bookingApi = {
  getMy: async (): Promise<Booking[]> => {
    const res = await api.get("/bookings");
    return res.data;
  },

  create: async (data: BookingCreate): Promise<Booking> => {
    const res = await api.post("/bookings", data);
    return res.data;
  },

  getById: async (id: string): Promise<Booking> => {
    const res = await api.get(`/bookings/${id}`);
    return res.data;
  },
};
