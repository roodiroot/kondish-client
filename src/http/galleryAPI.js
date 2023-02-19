import { $authHost, $host } from ".";

export const getGalleryAPI = async (filters) => {
  const { data } = await $host.get("api/gallery", {
    params: {
      limit: filters.limit,
      page: filters.page,
    },
  });
  return data;
};
export const createGalleryAPI = async (formData) => {
  const { data } = await $authHost.post("api/gallery", formData);
  return data;
};
