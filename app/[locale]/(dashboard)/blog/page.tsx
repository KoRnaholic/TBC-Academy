import Article from "../../../../components/article/Article";

interface Recipes {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

interface DataObject {
  products: Recipes[];
}

const URL = "https://dummyjson.com/recipes";
export default async function Blog() {
  const response = await fetch(URL);
  const data: DataObject = await response.json();

  return (
    <div className="overflow-y-auto max-h-[550px]">
      {data.products.map((blog, index) => {
        return <Article key={index} blogs={blog} />;
      })}
    </div>
  );
}
