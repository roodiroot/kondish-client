import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const loginAPI = async (formData) => {
  const { data } = await $host.post("api/user/login", formData);
  localStorage.setItem("token", data?.token);
  return jwt_decode(data?.token);
};
export const checkAPI = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data?.token);
  return jwt_decode(data?.token);
};
