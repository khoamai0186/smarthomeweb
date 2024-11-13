import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { BellIcon } from "@heroicons/react/24/outline";

export default function RightSidebar() {
  // const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  // const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <div
      className={`${
        open ? "w-56" : "w-12"
      } px-2 pt-2 border-l border-slate-900 relative duration-300 bg-slate-800`}
    >
      {/* Arrow */}
      <div className="sticky top-28">
        <img
          alt=""
          src="/src/assets/control.png"
          className={`absolute cursor-pointer -left-6 top-5 w-7 border-dark-purple
          border-2 rounded-full ${open && "rotate-180"}`}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div className="flex-1 mt-2">
          <div className="flex gap-x-2 items-center justify-center">
            <BellIcon
              className={`cursor-default duration-500 w-6 h-7 ${
                !open && "text-gray-400"
              }`}
            />
            <h1
              className={`cursor-default text-stone-400 origin-left text-base duration-200  ${
                !open && "hidden"
              }`}
            >
              Notifications
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
