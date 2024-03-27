import Button from "../UI/Button";

export default function ProductCard({ products }) {
  return (
    <>
      {products.map((product, index) => {
        const { title, description, image } = product;
        return (
          <div
            key={index}
            className="max-w-[250px] max-h-[350px] mx-auto bg-slate-50 dark:bg-slate-300 shadow-lg rounded-lg  transition ease-in-out delay-0
          hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <img
              className="w-full  object-cover object-center"
              src={image}
              alt="product"
            />
            <div className="p-4">
              <h2 className="text-gray-900 font-bold text-xl mb-2">{title}</h2>
              <p className="text-gray-700 text-base">{description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-gray-900 font-bold">$119.99</span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
