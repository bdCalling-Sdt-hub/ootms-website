import LoadRequest from "@/components/LoadRequest/LoadRequest";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LoadRequest />
      </Suspense>
    </div>
  );
};

export default page;
