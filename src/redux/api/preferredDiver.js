import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const PreferredDriverApi = baseApi.injectEndpoints({
  endpoints: (builds) => ({
    getPreferredDriver: builds.query({
      query: ({ page, searchTerm, limit }) =>
        `/preferred-driver?searchQuery=${searchTerm}&page=${page}&limit=${limit}`,
    }),
    getNearByDriverByDriverLocation: builds.query({
      query: ({ long, lat, page, searchTerm, limit }) =>
        `/loads/find_driver_by_recent_driver_location?location=${long},${lat}&searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
    }),
  }),
});

export const {
  useGetPreferredDriverQuery,
  useGetNearByDriverByDriverLocationQuery,
} = PreferredDriverApi;
