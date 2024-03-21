import React from "react";
import Article from "../content/Article";

const articles = [
  {
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },
  {
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },
  {
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },
];
export default function Blog() {
  return (
    <>
      {articles.map((article) => {
        return <Article article={article} />;
      })}
    </>
  );
}
