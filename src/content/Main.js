import laptop from "../images/laptop.jpg";
import smartphone from "../images/smartphone1.jpg";
import MacBook from "../images/macbook.jpg";

function Main() {
  return (
    <div className="flex gap-14 justify-center items-center p-10 text-slate-700">
      <div
        className="bg-cover bg-center h-72 w-72 flex justify-center
        items-end transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 duration-300"
        style={{ backgroundImage: `url(${laptop})` }}
      >
        <div className="pb-5">
          <button className="py-2 px-10 bg-slate-50 hover:bg-slate-200">
            Laptops
          </button>
        </div>
      </div>
      <div
        className="bg-cover bg-center h-72 w-72 flex justify-center
        items-end transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 duration-300"
        style={{ backgroundImage: `url(${smartphone})` }}
      >
        <div className="pb-5">
          <button className="py-2 px-10 bg-slate-50 hover:bg-slate-200">
            Smartphones
          </button>
        </div>
      </div>
      <div
        className="bg-cover bg-center h-72 w-72 flex justify-center
        items-end transition ease-in-out delay-150 
        hover:-translate-y-1 hover:scale-110 duration-300"
        style={{ backgroundImage: `url(${MacBook})` }}
      >
        <div className="pb-5">
          <button className="py-2 px-10 bg-slate-50 hover:bg-slate-200">
            MacBook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
