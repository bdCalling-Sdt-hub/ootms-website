import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFeedback: build.mutation({
      query: (feedbackData) => ({
        url: `/feedbacks`,
        method: "POST",
        body: feedbackData,
      }),
    }),
  }),
});

export const {useCreateFeedbackMutation} = feedbackApi;
