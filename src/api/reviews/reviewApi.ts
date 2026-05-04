import axios from "axios";
import type { ReviewByIdResponse } from "../../types/tutor";

const API_URL = "http://localhost:8000";

export const reviewApi = {
  getAll: async (): Promise<ReviewByIdResponse[]> => {
    const res = await axios.get(`${API_URL}/reviews/all`);
    return res.data;
  },

  getById: async (id: string): Promise<ReviewByIdResponse> => {
    const res = await axios.get(`${API_URL}/reviews/by_id/${id}`);
    return res.data;
  },
};