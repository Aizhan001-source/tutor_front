import { api } from "../api";
import type { Education } from "../../types/education";

export const educationApi = {
  async getAll(): Promise<Education[]> {
    const res = await api.get("/educations/");
    return res.data;
  },
};