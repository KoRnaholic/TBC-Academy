import logo from "../icons/logo.svg";
import search from "../icons/search.svg";
import user from "../icons/user.svg";
import cart from "../icons/cart.svg";

function Header() {
  return (
    <header className="py-5 px-20 bg-slate-50">
      <nav className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" width="40px" />
        </div>

        <div>
          <ul className="flex gap-8 text-lg">
            <li className="border-b-4 border-transparent hover:border-black">
              <a href="/">Home</a>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <a href="/">Shop</a>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <a href="/">About</a>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <a href="/">Contact</a>
            </li>
            <li className="border-b-4 border-transparent hover:border-black">
              <a href="/">Home</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex gap-5 items-center">
            <li>
              <img
                className="cursor-pointer"
                src={search}
                alt="logo1"
                width="30px"
              />
            </li>
            <li>
              <img
                className="cursor-pointer"
                src={user}
                alt="logo2"
                width="25px"
              />
            </li>
            <li>
              <img
                className="cursor-pointer"
                src={cart}
                alt="logo3"
                width="25px"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
