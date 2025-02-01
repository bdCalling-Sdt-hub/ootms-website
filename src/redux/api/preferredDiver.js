import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const PreferredDriverApi = baseApi.injectEndpoints({
  endpoints: (builds) => ({
    getPreferredDriver: builds.query({
      query: ({ page, searchTerm, limit }) =>
        `/preferred-driver?searchQuery=${searchTerm}&page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetPreferredDriverQuery } = PreferredDriverApi;
