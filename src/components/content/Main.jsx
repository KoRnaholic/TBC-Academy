import laptop from "../images/laptop.jpg";
import smartphone from "../images/smartphone1.jpg";
import MacBook from "../images/macbook.jpg";
import Card from "./Card";
import Article from "./Article";

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
  {
    title: "Some Kind of Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi expedita eveniet consectetur, voluptates voluptatum, sit excepturi earum. Veniam eius amet, accusantium, deserunt officia, quos qui debitis laboriosam velit quis autem!",
  },
];

function Main() {
  return (
    <>
      <div className="flex flex-col lg:flex-row  gap-14 justify-center items-center p-10 text-slate-700  ">
        <Card image={laptop} name="Laptops" />
        <Card image={smartphone} name="Smartphones" />
        <Card image={MacBook} name="MacBook" />
      </div>
      {articles.map((article) => {
        return <Article article={article} />;
      })}
    </>
  );
}

export default Main;
