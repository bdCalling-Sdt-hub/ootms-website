import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const loadRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLoadRequest: builder.query({
      query: ({ page, filter }) =>
        `/loads-request?myRequests=${filter}&page=${page}&limit=9`,
      providesTags: [tagTypes.loadRequest],
    }),

    handleAssignLoadRequest: builder.mutation({
      query: (data) => ({
        url: "/loads-request/action",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.loadRequest],
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
      invalidatesTags: [tagTypes.loadRequest, tagTypes.load],
    }),

    reAssainLoad: builder.mutation({
      query: ({ data, id }) => ({
        url: `/loads-request/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.loadRequest, tagTypes.currentShipment],
    }),
    cancleLoadRequest: builder.mutation({
      query: (data) => ({
        url: `/loads-request/action`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.loadRequest, tagTypes.load],
    }),
  }),
});

export const {
  useGetAllLoadRequestQuery,
  useGetSingleLoadRequestQuery,
  useCreateLoadRequestMutation,
  useGetAllTrucksQuery,
  useHandleAssignLoadRequestMutation,
  useReAssainLoadMutation,
  useCancleLoadRequestMutation,
} = loadRequestApi;
