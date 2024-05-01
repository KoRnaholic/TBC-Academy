import Article from "../../../../components/article/Article";
import { BlogObject } from "../../../../types/types";

const URL = "https://dummyjson.com/recipes";
export default async function Blog() {
  const response = await fetch(URL);
  const data: BlogObject = await response.json();

  return (
    <>
      <div className="bg-[#07212e] flex items-center justify-center h-[450px]">
        <div className="flex-col gap-8  flex ">
          <h1 className="text-[#F28123] tracking-widest text-xl">
            WE DELIVER TECH DREAMS
          </h1>
          <h1 className="text-center text-white text-4xl sm:text-5xl ">
            Blog Page
          </h1>
        </div>
      </div>

      <div className="overflow-y-auto max-h-[550px]">
        {data.recipes.map((blog, index) => {
          return <Article key={index} blogs={blog} />;
        })}
      </div>
    </>
  );
}
