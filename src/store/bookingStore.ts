import { create } from "zustand";
import { bookingApi } from "../api/bookingApi";
import type { Booking, BookingCreate } from "../types/booking";

interface BookingState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;

  getMyBookings: () => Promise<void>;
  createBooking: (data: BookingCreate) => Promise<void>;
}

export const useBookingStore = create<BookingState>((set, get) => ({
  bookings: [],
  loading: false,
  error: null,

  getMyBookings: async () => {
    set({ loading: true, error: null });

    try {
      const data = await bookingApi.getMy();
      set({ bookings: data });
    } catch (err: any) {
      set({
        error: err?.response?.data?.detail || "Error loading bookings",
      });
    } finally {
      set({ loading: false });
    }
  },

  createBooking: async (data) => {
    set({ loading: true, error: null });

    try {
      const newBooking = await bookingApi.create(data);

      set({
        bookings: [newBooking, ...get().bookings],
      });
    } catch (err: any) {
      set({
        error: err?.response?.data?.detail || "Error creating booking",
      });
    } finally {
      set({ loading: false });
    }
  },
}));