import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getFromLocalStorage } from "./utils/local-storage";
const { jwtDecode } = require("jwt-decode"); // Use CommonJS import for jwt-decode

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get("ootms_accessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  try {
    // Decode the token
    const decodedData = jwtDecode(accessToken);

    const role = decodedData?.role;

    // General private routes (accessible to all logged-in users)
    const privateRoutes = [
      "/dispatching",
      "/assign-load",
      "/load-request",
      "/load-request/my-request",
      "/load-request/my-request/:paths*",
      "/current-shipment",
      "/current-shipment/:paths*",
      "/profile",
      "/edit-profile",
    ];

    if (privateRoutes.some((route) => pathname.startsWith(route))) {
      if (role === "user") {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/sign-in", request.url));
      }
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: [
    "/dispatching",
    "/assign-load",
    "/load-request",
    "/load-request/my-request",
    "/load-request/my-request/:paths*",
    "/current-shipment",
    "/current-shipment/:paths*",
    "/profile",
    "/edit-profile",
  ],
};
