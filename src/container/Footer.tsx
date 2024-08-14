import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="  py-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold  mb-4">Company Name</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </p>
        </div>

        <div className="hidden md:block border-l border-gray-100"></div>

        <div>
          <h3 className="text-xl font-semibold  mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link
                to="hero"
                smooth={true}
                className="hover:text-white cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="about" smooth={true} offset={-75}>
                <a href="" className="hover:text-gray-400">
                  About
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="contact"
                smooth={true}
                offset={-110}
                className="hover:text-gray-400 cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="services"
                smooth={true}
                className="hover:text-gray-400 cursor-pointer"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:block border-l border-gray-700"></div>

        <div>
          <h3 className="text-xl font-semibold  mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 mt-8 pt-8 text-center ">
        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
};
