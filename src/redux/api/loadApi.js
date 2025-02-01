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
      query: ({ allLoadsPage, searchTerm }) => ({
        // url: `/loads?page=${allLoadsPage}&limit=2&searchTerm=${searchTerm}`,
        url: `/loads/pending_shipment?page=${allLoadsPage}&limit=2&searchTerm=${searchTerm}`,
        method: "GET",
      }),
      providesTags: [tagTypes.load],
    }),
    getNearestDriverForUser: build.mutation({
      query: (data) => ({
        url: `/loads/nearest_driver_for_user`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateLoadMutation,
  useGetAllPendingLoadsQuery,
  useGetNearestDriverForUserMutation,
} = loadApi;
