import bannerImg from "../images/banner.jpg";

function Banner() {
  return (
    <div
      className="bg-cover bg-center h-[50rem] flex justify-center items-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="flex flex-col gap-16 items-center text-white size-2/3">
        <h1 className="text-8xl ">Select Your New Perfect Style</h1>
        <p>
          asdaskdjasdj asdjasdjas adasdijiquwjqd asdasasd <br /> sssssssss
          asdasd asd asdas dasd asdasdas sad asd asasd asd asads asd
        </p>
        <button className="py-3 px-7 bg-slate-600 hover:bg-slate-800  rounded-full">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Banner;
