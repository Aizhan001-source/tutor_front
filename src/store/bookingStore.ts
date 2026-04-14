import { create } from "zustand";
import { bookingApi } from "../api/bookingApi";
import type { Booking, BookingCreate } from "../types/booking";

interface BookingState {
  loading: boolean;
  error: string | null;
  bookings: Booking[];

  getMyBookings: () => Promise<void>;
  createBooking: (data: BookingCreate) => Promise<void>;
}

export const useBookingStore = create<BookingState>((set, get) => ({
  loading: false,
  error: null,
  bookings: [],

  getMyBookings: async () => {
    set({ loading: true, error: null });
    try {
      const data = await bookingApi.getMy();
      set({ bookings: data });
    } finally {
      set({ loading: false });
    }
  },

  createBooking: async (data) => {
    set({ loading: true, error: null });
    try {
      const newBooking = await bookingApi.create(data);

      set({
        bookings: [...get().bookings, newBooking],
      });
    } finally {
      set({ loading: false });
    }
  },
}));