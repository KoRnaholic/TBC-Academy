import Article from "@/components/article/Article";

const URL = "https://dummyjson.com/recipes";
export default async function Blog() {
  const response = await fetch(URL);
  const data = await response.json();

  return (
    <div className="overflow-y-auto max-h-[550px]">
      {data.recipes.map((blog, index) => {
        return <Article key={index} blogs={blog} />;
      })}
    </div>
  );
}