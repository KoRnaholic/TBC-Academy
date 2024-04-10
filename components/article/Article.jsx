import Image from "next/image";
import Link from "next/link";

export default function Article({ blogs }) {
  return (
    <div className="py-4 flex items-center justify-center">
      <div
        key={blogs.id}
        className="p-4 gap-6 bg-slate-100 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 flex flex-col sm:flex-row"
      >
        <div className="flex-1">
          <Image
            src={blogs.image}
            width={300}
            height={300}
            className="rounded-xl "
            alt={blogs.name}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 items-start">
          <h2 className="text-2xl font-bold">{blogs.name}</h2>
          <p>Difficulty: {blogs.difficulty}</p>
          <p>Cuisine: {blogs.cuisine}</p>
          <p>Calories per Serving: {blogs.caloriesPerServing}</p>
          <p>
            Rating: {blogs.rating} ({blogs.reviewCount} reviews)
          </p>
          <p>Meal Type: {blogs.mealType.join(", ")}</p>
          <button className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
            <Link href={`blog/${blogs.id}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
