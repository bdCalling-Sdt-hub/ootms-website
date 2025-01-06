import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const loadApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLoad: build.mutation({
      query: (loadData) => ({
        url: `/loads`,
        method: "POST",
        body: loadData,
      }),
      invalidatesTags: [tagTypes.load],
    }),
    getAllPendingLoads: build.query({
      query: () => ({
        url: `/loads`,
        method: "GET",
      }),
      providesTags: [tagTypes.load],
    }),
  }),
});

export const { useCreateLoadMutation, useGetAllPendingLoadsQuery } = loadApi;
