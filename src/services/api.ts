import axios from "axios";

const API_KEY = "xFfctteWOypgagJ0CEII1erBf-X_WJbV89-X4NyEOy4";
const BASE_URL = "https://api.unsplash.com/";

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

interface UnsplashResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  perPage: number = 5,
  page: number = 1
): Promise<UnsplashResponse> => {
  try {
    const response = await axios.get<UnsplashResponse>(
      `${BASE_URL}search/photos`,
      {
        params: {
          query,
          per_page: perPage,
          page,
        },
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    throw error;
  }
};
