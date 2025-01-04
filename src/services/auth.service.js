
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ ootms_accessToken }) => {
  return setToLocalStorage("ootms_accessToken", ootms_accessToken);
};
export const removeUserInfo = () => {
  return removeFromLocalStorage("ootms_accessToken");
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("ootms_accessToken");
  if (authToken) {
    const userInfo = decodedToken(authToken);
    return userInfo;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("ootms_accessToken");
  return !!authToken;
};
