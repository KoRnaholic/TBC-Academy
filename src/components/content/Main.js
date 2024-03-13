import laptop from "../images/laptop.jpg";
import smartphone from "../images/smartphone1.jpg";
import MacBook from "../images/macbook.jpg";
import Card from "./Card";

function Main() {
  return (
    <div className="flex flex-col lg:flex-row  gap-14 justify-center items-center p-10 text-slate-700  ">
      <Card image={laptop} name="Laptops" />
      <Card image={smartphone} name="Smartphones" />
      <Card image={MacBook} name="MacBook" />
    </div>
  );
}

export default Main;
