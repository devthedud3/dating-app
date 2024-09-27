import api from "../api/client";

export const login = async (userData) => {
  try {
    const response = await api.post("/api/auth/login", userData);
    const data = response.data;

    return data;
  } catch (error) {
    return { error: error };
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post("/api/auth/register", userData);
    const data = response.data;

    return data;
  } catch (error) {
    return { error: error };
  }
};

export const reset = async (userData) => {
  try {
    const response = await api.post("/api/auth/reset", userData);
    const data = response.data;
    return data;
  } catch (error) {
    return { error: error };
  }
};

export const currentUser = async () => {
  try {
    const { user } = await data;
    if (!user) return null;
    return user;
  } catch (error) {
    return { error: error };
  }
};
