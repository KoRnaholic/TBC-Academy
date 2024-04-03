import React from "react";
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
export default function Blog() {
  return (
    <div className="overflow-y-auto max-h-[550px]">
      {articles.map((article, index) => {
        return <Article key={index} article={article} />;
      })}
    </div>
  );
}
