import { NavLink, Link } from "react-router-dom";
import classNames from "classnames";

function NavigationBar() {
  return (
    <div className="navigation-bar text-m font-semibold text-white">
      <NavLink to="/" className="mr-5 ml-5">
        Home
      </NavLink>
      <NavLink to="/support" className="mr-5 ml-5">
        Support Center
      </NavLink>
      <NavLink to="/about" className="mr-5 ml-5">
        About Us
      </NavLink>
      <NavLink to="/contact" className="mr-5 ml-5">
        Contact Us
      </NavLink>
      <NavLink to="/blog" className="mr-5 ml-5">
        Blog
      </NavLink>
    </div>
  );
}

export default function NavbarHome() {
  return (
    <div className={`navbar-header h-1/6 sticky top-0 bg-black z-10 shadow-sm`}>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/src/assets/smarthome_icon.png"
            className="h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Me and Nothing
          </span>
        </a>
        <NavigationBar /> {/* Integration of the NavigationBar component */}
        <div className="flex flex-row gap-4">
          <Link
            to="auth/login"
            className={classNames(
              `px-3 py-2`,
              `text-white`,
              `font-semibold`,
              `rounded-xl`,
              `bg-[#203394]`, // Background color
              `hover:bg-[#244f54]`, // Background color on hover
              `hover:bg-opacity-80` // Opacity on hover
            )}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
