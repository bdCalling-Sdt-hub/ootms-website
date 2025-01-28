import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const SubscriptionApi = baseApi.injectEndpoints({
  endpoints: (builds) => ({
    getSubscriptions: builds.query({
      query: () => `/subscriptions/user`,
      providesTags: [tagTypes.subscribe],
    }),
  }),
});

export const { useGetSubscriptionsQuery } = SubscriptionApi;
