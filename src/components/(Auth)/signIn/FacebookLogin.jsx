"use client";
import { Button } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { allIcons } from "../../../../public/assets/AllImages";
import { useSocialLoginMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAccessToken, setUserInfo } from "@/redux/slices/authSlice";
import Cookies from "universal-cookie";

const FacebookLogin = () => {
  const { data: session, status } = useSession(); // Include session status
  const dispatch = useDispatch();
  const [socialLogin] = useSocialLoginMutation();
  const router = useRouter();
  const cookies = new Cookies();
  console.log("session.user", session);

  // Handle the Google login after the session is set
  const handleFacebookClick = useCallback(async () => {
    if (!session?.user) {
      console.error("No session found!");
      return;
    }

    const toastId = toast.loading("Logging in..."); // This creates the loading toast

    if (!session?.user?.email) {
      return (
        toast.error("Your Facebook is not created with Email..."),
        setTimeout(signOut(), 2000)
      );
    }
    const loginData = {
      email: session.user.email,
      fullName: session.user.name,
      role: "user",
      image: session.user.image,
    };

    try {
      const res = await socialLogin(loginData).unwrap();
      const accessToken = res?.data?.accessToken;

      // Update Redux store
      dispatch(setAccessToken(accessToken));
      cookies.set("ootms_accessToken", res?.data?.accessToken, {
        path: "/",
      });
      dispatch(setUserInfo(res?.data?.attributes));

      // Show success toast and dismiss the loading toast
      toast.success(res.message || "Logged in successfully", {
        id: toastId, // Link to the previous loading toast to replace it
        autoClose: 2000,
      });

      // Redirect user
      router.push("/profile"); // Redirect to home after successful login
    } catch (error) {
      console.error("Login Error:", error);

      // Show error toast and dismiss the loading toast
      toast.error(
        error?.data?.message ||
          error?.error ||
          "An error occurred during Login",
        {
          id: toastId, // Link to the previous loading toast to replace it
          autoClose: 2000,
        }
      );
    }
  }, [session, socialLogin, dispatch, router]);

  // Trigger handleGoogleClick only after session is set
  useEffect(() => {
    if (session?.user) {
      handleFacebookClick();
    }
  }, [handleFacebookClick, session]); // Re-run when session or status changes
  return (
    <>
      <Button
        onClick={() => signIn("facebook")}
        className="flex items-center justify-center gap-2 py-5 px-4 text-lg !border !border-contact-input text-base-color hover:bg-[#2B4257] hover:text-primary-color rounded-lg mt-2"
        icon={
          <Image
            src={allIcons.facebook}
            alt="Apple Icon"
            width={20}
            height={20}
          />
        }
      >
        Sign in with Facebook
      </Button>
    </>
  );
};

export default FacebookLogin;
