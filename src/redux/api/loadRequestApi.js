import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const loadRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLoadRequest: builder.query({
      query: ({ page }) =>
        `/loads-request?myRequests=true&page=${page}&limit=9`,
      providesTags: [tagTypes.loadRequest],
    }),

    getSingleLoadRequest: builder.query({
      query: (id) => `/loads-request/${id}`,
      providesTags: [tagTypes.loadRequest],
    }),
    // getCurrentShipment: builder.query({
    //   query: () => `/shipment/current`,
    //   providesTags: [tagTypes.current],
    // }),

    getAllTrucks: builder.query({
      query: ({ page }) =>
        `/truck-details/available_truck?page=${page}&limit=3`,
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
  useGetAllTrucksQuery,
} = loadRequestApi;
