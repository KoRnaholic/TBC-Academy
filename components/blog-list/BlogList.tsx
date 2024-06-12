"use client";
import SingleBlog from "./SingleBlog";
import { BlogPost } from "../../types/types";
import BlogSearch from "./BlogSearch";
import RecentBlogs from "./RecentBlogs";
import { useRef, useState } from "react";

export default function BlogList({ blogs }: { blogs: BlogPost[] | null }) {
  const [search, setSearch] = useState("");
  const [searchedBlogs, setSearchedBlogs] = useState(blogs);
  // const [filterBy, setFilterBy] = useState("");
  const debounceTimeout = useRef<number | null>(null);

  //Searching with debounce
  const handleSearch = (value: string) => {
    setSearch(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = window.setTimeout(() => {
      const currentBlog: any = blogs?.filter((blog: BlogPost) =>
        blog.title.toLowerCase().includes(value.trim().toLowerCase())
      );
      setSearchedBlogs(currentBlog);
    }, 500);
  };
  return (
    <>
      <div className="flex flex-col gap-6">
        {searchedBlogs?.map((blog) => {
          return (
            <div key={blog.id}>
              <SingleBlog expand={false} blog={blog} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-1/5 gap-8">
        <BlogSearch handleSearch={handleSearch} search={search} />
        <RecentBlogs blogs={blogs} />
      </div>
    </>
  );
}
