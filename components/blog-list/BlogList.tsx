import React from "react";
import SingleBlog from "./SingleBlog";

export default function BlogList({ blogs }) {
  return (
    <div className="flex flex-col gap-6">
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <SingleBlog expand={false} blog={blog} />
          </div>
        );
      })}
    </div>
  );
}
