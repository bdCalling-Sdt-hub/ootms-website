// For fetchbase query
import Cookies from "universal-cookie";
const cookies = new Cookies();
import { baseApi } from "./baseApi";
import { decodedToken } from "@/utils/jwt";
import { tagTypes } from "../tagTypes";

const accessToken = cookies.get("ootms_accessToken");

const AUTH_URL = "";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/auth/local`,
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    signUp: build.mutation({
      query: (signupData) => ({
        url: `${AUTH_URL}/auth/sign-up`,
        method: "POST",
        body: signupData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    verifiedEmail: build.mutation({
      query: (otpData) => {
        const token = localStorage.getItem("ootms_createUserToken");
        return {
          url: `${AUTH_URL}/auth/verify-email`,
          method: "POST",
          body: otpData,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
    resendOTP: build.mutation({
      query: () => {
        // const token = localStorage.getItem("ootms_createUserToken");
        // const decoded = decodedToken(token);
        // const email = decoded?.email;
        return {
          url: `/auth/verify-otp`,
          method: "PATCH",
          body: { email: email },
        };
      },
      invalidatesTags: [tagTypes.user],
    }),

    // updateProfile: build.mutation({
    //   query: (updateData) => {
    //     return {
    //       url: `${AUTH_URL}/${updateData?.userId}`,
    //       method: "PUT",
    //       data: updateData?.updateData,
    //     };
    //   },
    //   invalidatesTags: [tagTypes.user],
    // }),

    forgetPassword: build.mutation({
      query: (userEmail) => {
        return {
          url: `/auth/forget-password`,
          method: "POST",
          body: userEmail,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
    resendForgetOTP: build.mutation({
      query: () => {
        const token = localStorage.getItem("ootms_forgetPasswordVerifyToken");
        const decoded = decodedToken(token);
        const email = decoded?.email;
        return {
          url: `/otp/resend-otp`,
          method: "PATCH",
          body: { email: email },
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
    forgetOtpVerify: build.mutation({
      query: (otpData) => {
        const token = localStorage.getItem("ootms_forgetPasswordVerifyToken");
        return {
          url: `/auth/forgot-password-otp-match`,
          method: "PATCH",
          body: otpData,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
    resetPassword: build.mutation({
      query: (resetData) => {
        const token = localStorage.getItem("ootms_otp_match_token");
        return {
          url: `/auth/reset-password`,
          method: "PATCH",
          body: resetData,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
    myProfile: build.query({
      query: () => {
        return {
          url: `${AUTH_URL}/users/user-details`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.user], // Ensures that the profile data can be invalidated if needed
    }),
  }),
});

export const {
  useSignUpMutation,
  useVerifiedEmailMutation,
  useResendOTPMutation,
  useUserLoginMutation,
  useForgetPasswordMutation,
  useResendForgetOTPMutation,
  useForgetOtpVerifyMutation,
  useResetPasswordMutation,
  useMyProfileQuery,
  //   useUpdateProfileMutation,
  //   useGetAllUserQuery,
  //   useGetSingleUserQuery,
} = authApi;
