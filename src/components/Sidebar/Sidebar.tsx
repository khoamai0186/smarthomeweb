import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";
import { ChartPieIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const { room_id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const Menus =
    room_id !== undefined
      ? // If room_id is defined, render these menu items
        [
          {
            title: "Dashboard",
            src: `\dashboard`,
            icon: (
              <img
                alt=""
                src="/src/assets/dashboard-report-icon.png"
                className="w-5 h-4"
              />
            ),
          },
          {
            title: "Statistics",
            src: `\dashboard/${room_id}/statistics`,
            icon: (
              // <img src="/src/assets/dashboard-report-icon.png" className="w-5 h-4" />
              <ChartPieIcon className="w-5 h-5 text-black" />
            ),
          },
          {
            title: "Devices",
            src: `\dashboard/${room_id}/device`,
            icon: (
              <img
                alt=""
                src="/src/assets/Device.png"
                className="w-5 h-4"
                color="black"
              />
            ),
          },
          {
            title: "Calendar",
            src: `\dashboard/${room_id}/calendar`,
            icon: <FaRegCalendarAlt color="black" className="w-5 h-5" />,
          },
          {
            title: "Contact Us",
            src: `\contact`,
            icon: <PiPlant color="black" className="w-5 h-5" />,
          },
        ]
      : // If room_id is undefined, render these menu items
        [
          {
            title: "Dashboard",
            src: `\dashboard`,
            icon: (
              <img
                alt=""
                src="/src/assets/dashboard-report-icon.png"
                className="w-5 h-4"
              />
            ),
          },
          // Add other menu items for the case when room_id is undefined
        ];

  const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <div
      className={`${
        open ? "w-56" : "w-20"
      } p-5 pt-2 border-r-slate-900 border-r relative duration-300 bg-slate-800 h-auto`}
    >
      <div className="sticky top-28">
        <img
          alt=""
          src="/src/assets/control.png"
          className={`absolute cursor-pointer -right-9 top-5 w-7 border-dark-purple
          border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div className="flex-1">
          <div
            className={` ${
              !open && "hidden"
            } mb-4 text-2xl font-semibold text-center font-mono mr-2 text-white `}
          >
            Smart Home
          </div>
          <div
            className={` ${
              !open && "hidden"
            } border-2 rounded-xl h-28 bg-[url('/src/assets/SmartHomes2.jpg')] bg-cover bg-center mb-4`}
          ></div>
          <ul className="">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer ${
                  selectedMenu === index ? "bg-blue-400" : ""
                }  hover:bg-blue-400 text-sm items-center gap-x-3 mt-2 duration-300`}
                onClick={() => {
                  navigate(`/${Menu.src}`);
                  setSelectedMenu(index); // Update the selected menu
                }}
              >
                {Menu.icon}
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-white`}
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
