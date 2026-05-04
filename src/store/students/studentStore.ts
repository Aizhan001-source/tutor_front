import { create } from "zustand";
import { studentApi } from "../../api/students/studentApi";

export interface Student {
  id: string;
  user_id: string;
  user: any | null;
}

interface StudentState {
  students: Student[];
  count: number;

  isLoading: boolean;
  error: string | null;

  fetchStudents: () => Promise<void>;
  fetchStudentCount: () => Promise<void>;
}

export const useStudentStore = create<StudentState>((set) => ({
  students: [],
  count: 0,

  isLoading: false,
  error: null,

  fetchStudents: async () => {
    set({ isLoading: true, error: null });

    try {
      const data = await studentApi.getAll();
      set({ students: data, isLoading: false });
    } catch (e: any) {
      set({
        error: e?.message ?? "Failed to fetch students",
        isLoading: false,
      });
    }
  },

  fetchStudentCount: async () => {
    set({ isLoading: true, error: null });

    try {
      const data = await studentApi.getCount();

      console.log("students count:", data);

      set({
        count: data,
        isLoading: false,
      });
    } catch (e: any) {
      set({
        count: 0,
        isLoading: false,
        error: e?.message ?? "Failed to fetch student count",
      });
    }
  },
}));