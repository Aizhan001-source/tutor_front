import axios from "axios";

const API_URL = "http://localhost:8000";

export interface StudentResponse {
  id: string;
  user_id: string;
  user: any | null; 
}

export const studentApi = {
  // GET /students
  getAll: async (): Promise<StudentResponse[]> => {
    const res = await axios.get(`${API_URL}/students/`);
    return res.data;
  },

  getCount: async (): Promise<number> => {
    const res = await axios.get(`${API_URL}/students/count`);
    return res.data;
  },

  getById: async (id: string): Promise<StudentResponse> => {
    const res = await axios.get(`${API_URL}/students/${id}`);
    return res.data;
  },
};