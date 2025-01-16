"use client";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
// import { toast } from "sonner";

const Providers = ({ children }) => {
  // const responseMessage = (response) => {
  //   toast.success(response);
  // };
  // const errorMessage = (error) => {
  //   toast.error(error);
  // };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <GoogleOAuthProvider clientId="1026790988080-5t355vtcj5n5imm0i0dp4k8c7da67486.apps.googleusercontent.com"> */}
        {children}
        {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
        {/* </GoogleOAuthProvider> */}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
