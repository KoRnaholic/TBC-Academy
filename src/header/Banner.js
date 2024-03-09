import bannerImg from "../images/banner.jpg";

function Banner() {
  return (
    <div
      className="bg-cover bg-center h-[30rem] flex justify-center items-center lg:h-[50rem]"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="flex flex-col gap-6 items-center justify-center text-white size-2/3 lg:gap-16 lg">
        <h1 className="text-4xl lg:text-7xl">Select Your New Perfect Style</h1>
        <p className="text-xl">
          Discover the Latest in Tech: Shop our Exciting Selection of Gadgets
          and Gear Today!
        </p>
        <button
          className="py-3 px-7 mt-8 bg-slate-700 hover:bg-slate-800  rounded-full transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-100 duration-300"
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Banner;
