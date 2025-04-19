import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const getBooks = async (page, limit = 20, search) => {
  const startIndex = (page - 1) * limit;

  const response = await axios.get(BASE_URL, {
    params: {
      q: search || 'good',
      startIndex,
      maxResults: limit,
      orderBy: 'newest',
      langRestrict: 'en',
      key: API_KEY,
    },
  });

  return response.data;
};

export const getBookById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`, {
    params: { key: API_KEY },
  });

  return response.data;
};
