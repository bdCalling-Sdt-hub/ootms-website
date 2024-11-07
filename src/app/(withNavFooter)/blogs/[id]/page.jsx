import BlogDetails from "@/components/BlogDetails/BlogDetails";
import React from "react";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <BlogDetails />
    </div>
  );
};

export default page;
