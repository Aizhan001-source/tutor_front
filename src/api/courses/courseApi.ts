import axios from "axios";
import type { CourseByIdResponse } from "../../types/tutor";

const API_URL = "http://localhost:8000";

export const courseApi = {
  getAll: async (): Promise<CourseByIdResponse[]> => {
    const res = await axios.get(`${API_URL}/courses/all`);
    return res.data;
  },

  getById: async (id: string): Promise<CourseByIdResponse> => {
    const res = await axios.get(`${API_URL}/courses/${id}`);
    return res.data;
  },
};