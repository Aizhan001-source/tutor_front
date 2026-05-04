import axios from "axios";
import type { TutorByIdResponse, TutorsCountResponse } from "../../types/tutor";

const API_URL = "http://localhost:8000"

export const tutorApi = {
  getAll: async (): Promise<TutorByIdResponse[]> => {
    const res = await axios.get(`${API_URL}/tutors/all`);
    return res.data;
  },

  getById: async (id: string): Promise<TutorByIdResponse> => {
    const res = await axios.get(`${API_URL}/tutors/by_id/${id}`);
    return res.data;
  },

  getCount: async (): Promise<TutorsCountResponse> => {
    const res = await axios.get(`${API_URL}/tutors/count`);
    return res.data;
  },
};

