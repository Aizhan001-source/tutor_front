import { create } from "zustand";
import { bookingApi } from "../api/bookingApi";
import type { Booking, BookingCreate } from "../types/booking";

interface BookingState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;

  getMyBookings: () => Promise<void>;
  createBooking: (data: BookingCreate) => Promise<void>;
  refresh: () => Promise<void>;
}

export const useBookingStore = create<BookingState>((set) => ({
  bookings: [],
  loading: false,
  error: null,

  getMyBookings: async () => {
    set({ loading: true, error: null });

    try {
      const bookings = await bookingApi.getMy();
      set({ bookings });
    } catch (err: any) {
      set({ error: err?.response?.data?.detail || "Failed to load bookings" });
    } finally {
      set({ loading: false });
    }
  },

  createBooking: async (data: BookingCreate) => {
    set({ loading: true, error: null });

    try {
      const newBooking = await bookingApi.create(data);

      set((state) => ({
        bookings: [newBooking, ...state.bookings],
      }));
    } catch (err: any) {
      set({
        error: err?.response?.data?.detail || "Failed to create booking",
      });
    } finally {
      set({ loading: false });
    }
  },

  refresh: async () => {
    const bookings = await bookingApi.getMy();
    set({ bookings });
  },
}));