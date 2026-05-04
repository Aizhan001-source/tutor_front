import { create } from "zustand";

interface BookingDraft {
  date: string | null;
  time: string | null;
  duration: number;

  setDate: (v: string | null) => void;
  setTime: (v: string | null) => void;
  setDuration: (v: number) => void;

  reset: () => void;
}

export const useBookingDraftStore = create<BookingDraft>((set) => ({
  date: null,
  time: null,
  duration: 60,

  setDate: (date) => set({ date }),
  setTime: (time) => set({ time }),
  setDuration: (duration) => set({ duration }),

  reset: () => set({ date: null, time: null, duration: 60 }),
}));