import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const loadRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loadRequest: builder.query({
      query: () => "/loads-request",
      providesTags: [tagTypes.loadRequest],
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

export const { useLoadRequestQuery, useCreateLoadRequestMutation } =
  loadRequestApi;
