import React from "react";
import SingleBlog from "./SingleBlog";
import { BlogPost } from "../../types/types";

export default function BlogList({ blogs }: { blogs: BlogPost[] | null }) {
  return (
    <div className="flex flex-col gap-6">
      {blogs?.map((blog) => {
        return (
          <div key={blog.id}>
            <SingleBlog expand={false} blog={blog} />
          </div>
        );
      })}
    </div>
  );
}
