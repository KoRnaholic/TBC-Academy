import Button from "../UI/Button";
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
        <Button forBanner={true}>SHOP NOW</Button>
      </div>
    </div>
  );
}

export default Banner;
