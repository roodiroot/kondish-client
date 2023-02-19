import { $authHost, $host } from ".";

export const getProductAPI = async (filters) => {
  const { data } = await $host.get("/api/products", {
    params: {
      page: filters.page,
      limit: filters.limit,
      brand: filters.brand,
      S: filters.S,
      WiFi: filters.WiFi,
      hit: filters.hit,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
    },
  });
  return data;
};
export const getOneProductAPI = async (id) => {
  const { data } = await $host.get(`/api/products/${id}`);
  return data;
};
export const updateProductAPI = async (id, value) => {
  const { data } = await $authHost.put("/api/products", {
    id: id,
    name: value.name,
    price: value.price,
    pipe_length_max: value.pipe_length_max,
    S: value.S,
    heating_power: value.heating_power,
    cooling_power: value.cooling_power,
    noise: value.noise,
    WiFi: value.WiFi,
    energy_class: value.energy_class,
    compressor: value.compressor,
    description: value.description,
    hit: value.hit,
  });

  return data;
};
export const createProductAPI = async (formData) => {
  const { data } = await $authHost.post("/api/products", formData);
  return data;
};

export const deletOneProductAPI = async (id) => {
  const { data } = await $authHost.delete("/api/products", { data: { id } });
  return data;
};
