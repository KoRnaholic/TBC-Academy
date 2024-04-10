"use client";
import React, { useEffect, useState } from "react";
import Article from "@/components/article/Article";
import image from "@/public/images/smartphone.jpg";

const articles = [
  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },

  {
    date: "March, 25 2024",
    url: image,
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },
];
const URL = "https://dummyjson.com/recipes";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setBlogs(data.recipes);
      console.log(data.recipes);
    };

    fetchBlogs();
  }, []);
  return (
    <div className="overflow-y-auto max-h-[550px]">
      {blogs.map((blog, index) => {
        return <Article key={index} blogs={blog} />;
      })}
    </div>
  );
}
