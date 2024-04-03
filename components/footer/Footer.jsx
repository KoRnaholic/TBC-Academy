import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-gray-600 text-white p-8">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center items-center w-full mb-4 lg:mb-0">
          <h4 className="text-lg font-semibold mb-2">
            Subscribe to our newsletter
          </h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-900 text-white rounded-l py-2 px-4 focus:outline-none"
            />
            <button className="bg-slate-800 hover:bg-slate-500 rounded-r px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center ">
          <ul className="flex gap-8 text-lg">
            <li className="border-b-4 border-transparent hover:border-black">
              <Link href="/">Home</Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link href="/profile">Profile</Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link href="/about">About</Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:flex lg:justify-center lg:items-center  text-center lg:text-right">
          &copy; 2024 OpenMarket
        </div>
      </div>
    </footer>
  );
}
