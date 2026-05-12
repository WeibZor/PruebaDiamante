import axios from "axios";

const API_BASE = "https://fakestoreapi.com";

export const getProducts = async () => {
  const response = await axios.get(`${API_BASE}/products`);
  return response.data;
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}/products/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getCategories = async () => {
  const response = await axios.get(`${API_BASE}/products/categories`);
  return ["all", ...response.data];
};

export const getProductsByCategory = async (category) => {
  if (!category || category === "all") {
    return getProducts();
  }
  const response = await axios.get(`${API_BASE}/products/category/${encodeURIComponent(category)}`);
  return response.data;
};
