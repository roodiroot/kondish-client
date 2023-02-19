import { $authHost, $host } from ".";

export const getReviewsAPI = async () => {
  const { data } = await $host.get("api/reviews");
  return data;
};
export const createReviewsAPI = async (formData) => {
  const { data } = await $authHost.post("api/reviews", formData);
  return data;
};
