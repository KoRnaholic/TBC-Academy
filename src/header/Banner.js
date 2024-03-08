import bannerImg from "../images/banner.jpg";

function Banner() {
  return (
    <div
      className="bg-cover bg-center h-[30rem] flex justify-center items-center lg:h-[50rem]"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="flex flex-col gap-6 items-center text-white size-2/3 lg:gap-16 lg">
        <h1 className="text-4xl lg:text-7xl">Select Your New Perfect Style</h1>
        <p>
          asdaskdjasdj asdjasdjas adasdijiquwjqd asdasasd <br /> sssssssss
          asdasd asd asdas dasd asdasdas sad asd asasd asd asads asd
        </p>
        <button className="py-3 px-7 mt-8 bg-slate-600 hover:bg-slate-800  rounded-full">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Banner;
