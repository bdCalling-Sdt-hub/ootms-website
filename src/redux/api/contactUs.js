import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const contactUSApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createContract: build.mutation({
      query: (data) => ({
        url: `/support/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateContractMutation } = contactUSApi;
