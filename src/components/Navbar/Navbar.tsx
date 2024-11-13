// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import NavBarUserLoggedIn from "./NavbarUserLoggedIn";
import DigitalClock from "../DigitalClock/DigitalClock";

export default function Navbar() {
  return (
    <div
      className={`navbar-header h-1/6 sticky top-0 bg-slate-800 z-10 shadow-sm border-b-slate-900 border-b`}
    >
      <div
        className={classNames(
          "flex flex-wrap items-center justify-between mx-auto p-4"
        )}
      >
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/src/assets/smarthome_icon.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Me and Nothing
          </span>
        </a>
        <div className="w-[20%]">
          <div className="flex items-center justify-end px-5">
            <DigitalClock />
            <NavBarUserLoggedIn />
          </div>
        </div>
      </div>
    </div>
  );
}
