import type { TokenResponse, UserLogin } from "../../types/user";
import { api } from "../api";


export const authApi = {
  loginApi: async (data: UserLogin): Promise<TokenResponse> => {
    const response = await api.post("/users/login", data);
    return response.data;
  },
};
