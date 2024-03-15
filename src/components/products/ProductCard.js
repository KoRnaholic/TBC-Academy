import Button from "../UI/Button";

export default function ProductCard({ products }) {
  return (
    <>
      {products.map((product) => {
        const { title, description, image } = product;
        return (
          <div
            class="max-w-[250px] max-h-[350px] mx-auto bg-slate-50 shadow-lg rounded-lg  transition ease-in-out delay-150
          hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <img
              class="w-full  object-cover object-center"
              src={image}
              alt="product"
            />
            <div class="p-4">
              <h2 class="text-gray-900 font-bold text-xl mb-2">{title}</h2>
              <p class="text-gray-700 text-base">{description}</p>
              <div class="mt-3 flex items-center justify-between">
                <span class="text-gray-900 font-bold">$119.99</span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
