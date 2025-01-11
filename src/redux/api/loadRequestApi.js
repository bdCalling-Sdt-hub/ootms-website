import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const loadRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLoadRequest: builder.query({
      query: () => "/loads-request?myRequests=true",
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

    getAllTrucks: builder.query({
      query: ({ page }) =>
        `/truck-details/available_truck?page=${page}&limit=4`,
      providesTags: [tagTypes.allTruckDetails],
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

export const {
  useGetAllLoadRequestQuery,
  useGetSingleLoadRequestQuery,
  useCreateLoadRequestMutation,
  useGetCurrentShipmentQuery,
  useGetAllTrucksQuery,
} = loadRequestApi;
