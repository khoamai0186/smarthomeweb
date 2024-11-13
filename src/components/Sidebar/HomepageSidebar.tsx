import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaRegCalendarAlt } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function HomepageSidebar() {
  const navigate = useNavigate();
  //   const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Homepage",
      src: "/dashboard",
      icon: (
        <img alt="" src="/src/assets/dashboard-report-icon.png" className="w-5 h-4" />
      ),
    },
    {
      title: "Contact",
      src: "plant",
      icon: <PiPlant color="black" className="w-5 h-5" />,
    },
    {
      title: "About Us",
      src: "about-us",
      icon: (
        // <img src="/src/assets/dashboard-report-icon.png" className="w-5 h-4" />
        <InformationCircleIcon className="w-5 h-5 text-black" />
      ),
    },
  ];
  const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <div className={`${"w-56"} p-5 pt-2 border-r-2 relative duration-300`}>
      <div className="sticky top-28">
        <div className="flex-1">
          <ul className="">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer ${
                  selectedMenu === index ? "bg-gray-100" : ""
                }  hover:bg-gray-100 text-gray-300 text-sm items-center gap-x-3 mt-2`}
                onClick={() => {
                  navigate(`/${Menu.src}`);
                  setSelectedMenu(index); // Update the selected menu
                }}
              >
                {Menu.icon}
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-black`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
