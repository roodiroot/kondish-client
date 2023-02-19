import { $authHost, $host } from ".";

export const getArticles = async (filters) => {
  const { data } = await $host.get("/api/articles", {
    params: { page: filters.page, limit: filters.limit },
  });
  return data;
};
export const getOneArticles = async (id) => {
  const { data } = await $host.get(`/api/articles/${id}`);
  return data;
};
export const createArticleAPI = async (formData) => {
  const { data } = await $authHost.post("/api/articles", formData);
  return data;
};
