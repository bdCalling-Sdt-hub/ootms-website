import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const loadRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLoadRequest: builder.query({
      query: () => "/shipment/pending",
      providesTags: [tagTypes.loadRequest],
    }),

    getSingleLoadRequest: builder.query({
      query: (id) => `/loads/${id}`,
      providesTags: [tagTypes.loadRequest],
    }),
    getCurrentShipment: builder.query({
      query: () => `/shipment/current`,
      providesTags: [tagTypes.current],
    }),

    createLoadRequest: builder.mutation({
      query: (data) => ({
        url: "/loads-request",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.loadRequest],
    }),
  }),
});

export const { useGetAllLoadRequestQuery, useGetSingleLoadRequestQuery, useCreateLoadRequestMutation,useGetCurrentShipmentQuery } =
  loadRequestApi;
