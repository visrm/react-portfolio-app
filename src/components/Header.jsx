import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <header className="App-header m-0 px-1 bg-black/10 backdrop-blur-md backdrop-brightness-125 ease-out duration-300 shadow shadow-black/50">
      <p className="flex px-4 sm:px-5 mx-2 text-center text-3xl font-extrabold tracking-wide">
        Portfolio
      </p>
      <nav className="flex p-2 h-16">
        <ul className="z-[1] max-w-full mx-4 grid grid-flow-col gap-4 sm:gap-6 lg:gap-8 font-medium font-serif leading-relaxed items-center list-none">
          <li className="block text-sm sm:text-base">
            <Link to="/">Home</Link>
          </li>
          <li className="block text-sm sm:text-base">
            <Link to="/about-me">About</Link>
          </li>

          {/* <li className="basis-1/2 font-medium text-sm sm:text-lg">
                <a>About</a>
              </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
