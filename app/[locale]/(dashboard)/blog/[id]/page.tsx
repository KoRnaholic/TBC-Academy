import { fetchProducts } from "../../../../../helpers";
import Image from "next/image";
import React from "react";
import { BlogObject, Recipes } from "../../../../../types/types";
const URL = "https://dummyjson.com/recipes/";

interface Params {
  id: string;
}
export async function generateStaticParams() {
  const response = await fetch(URL);
  const blogs: BlogObject = await response.json();

  const paths = blogs.recipes.map((blog) => ({
    locale: "en",
    id: blog.id.toString(),
  }));
  const paths2 = blogs.recipes.map((blog) => ({
    locale: "ka",
    id: blog.id.toString(),
  }));

  return paths.concat(paths2);
}

export default async function SingleBlog({ params }: { params: Params }) {
  const data: Recipes = await fetchProducts(URL, params.id);

  return (
    <div className="flex  items-center justify-center">
      <div className="p-4 gap-6 bg-slate-100 dark:bg-slate-500 w-full  lg:w-4/6 rounded-lg shadow-lg transform transition-transform  flex flex-col sm:flex-row">
        <div className="">
          <Image
            src={data.image}
            width={300}
            height={300}
            className="rounded-xl w-full"
            alt={data.name}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 items-start">
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <p>
            <span className="font-bold">Ingredients:</span>{" "}
            {data.ingredients.join(", ")}
          </p>
          <p>
            <span className="font-bold">Instructions:</span>{" "}
            {data.instructions.map((instruction, index) => (
              <span key={index}>
                {index + 1}. {instruction} <br />
              </span>
            ))}
          </p>
          <p>
            <span className="font-bold">Prep Time:</span> {data.prepTimeMinutes}{" "}
            minutes
          </p>
          <p>
            <span className="font-bold">Cook Time:</span> {data.cookTimeMinutes}{" "}
            minutes
          </p>
          <p>
            <span className="font-bold">Servings:</span> {data.servings}
          </p>
          <p>
            <span className="font-bold">Difficulty:</span> {data.difficulty}
          </p>
          <p>
            <span className="font-bold">Cuisine:</span> {data.cuisine}
          </p>
          <p>
            <span className="font-bold">Calories Per Serving:</span>{" "}
            {data.caloriesPerServing}
          </p>
          <p>
            <span className="font-bold">Tags:</span> {data.tags.join(", ")}
          </p>
          <p>
            <span className="font-bold">Rating:</span> {data.rating} (
            {data.reviewCount} reviews)
          </p>
          <p>
            <span className="font-bold">Meal Type:</span>{" "}
            {data.mealType.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
