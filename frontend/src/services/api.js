// services/api.js
const API_KEY = "54ca7a58fc0e41c146c751ff2d6904e5";
const BASE_URL = "https://api.themoviedb.org/3";

async function request(path, params = {}) {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("api_key", API_KEY);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }

  const res = await fetch(url.toString());
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`TMDB ${res.status}: ${text || res.statusText}`);
  }
  return res.json();
}

export const getPopularMovies = async () => {
  const data = await request("/movie/popular");
  return Array.isArray(data?.results) ? data.results : [];
};

export const searchMovies = async (query) => {
  if (!query?.trim()) return [];
  const data = await request("/search/movie", { query });
  return Array.isArray(data?.results) ? data.results : [];
};
