import { Link } from "react-scroll";
import { Button } from "../components/Button";
export const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between text-xl items-center px-6 py-4 bg-gradient-to-r from-gray-800/50 to-stone-800/50 text-white w-full top-0 fixed z-50">
        <div className="flex space-x-6 px-8">
          <Link
            to="hero"
            smooth={true}
            className="hover:text-gray-400 cursor-pointer"
          >
            Home
          </Link>
          <Link to="about" smooth={true} offset={-75}>
            <a href="" className="hover:text-gray-400">
              About
            </a>
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-110}
            className="hover:text-gray-400 cursor-pointer"
          >
            Contact
          </Link>
          <Link
            to="services"
            smooth={true}
            className="hover:text-gray-400 cursor-pointer"
          >
            Services
          </Link>
        </div>
        <div className="flex space-x-4 px-8">
          <Button value="Login" isSuccess={true} />
          <Button value="Sign Up" isSuccess={false} />
        </div>
      </nav>
    </div>
  );
};
