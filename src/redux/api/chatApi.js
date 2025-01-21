import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMessageByChatId: build.query({
      query: ({ id }) => ({
        url: `/messages/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllMessageByChatIdQuery } = authApi;
