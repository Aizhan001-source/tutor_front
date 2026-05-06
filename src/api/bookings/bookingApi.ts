import { api } from "../api";
import type { Booking, BookingCreate } from "../../types/booking";

export const bookingApi = {
  async getMy(): Promise<Booking[]> {
    const { data } = await api.get("/bookings");
    return data;
  },

  async create(payload: BookingCreate): Promise<Booking> {
    const { data } = await api.post("/bookings", payload);
    return data;
  },

  async getById(id: string): Promise<Booking> {
    const { data } = await api.get(`/bookings/${id}`);
    return data;
  },
};