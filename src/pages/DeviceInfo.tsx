const image =  "../assets/waterpump.png";
import { useState } from "react";
import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";
// import CalendarDecive from "../components/Calendar/CalendarDecive";
import TableCalendar from "../components/Calendar/TableCalendar";
export default function DeviceInfo() {
  const { id } = useParams(); // Get the "id" from the URL
  const [name, setName] = useState(id);

  return (
    <div className="flex gap-2 mt-10 border">
      <div className="bg-white rounded-lg shadow-lg w-[25%] flex justify-center items-center">
        <div className="grid md:grid-cols-1 text-sm px-1 py-1 mt-3">
          <img
            src={image}
            className="w-50px h-50px rounded-full items-center"
            alt="avatar"
          />
          <h1 className="text-center mb-3 mt-3 text-xl">Pump {name}</h1>
          <button>
            <NavLink
              to={`/device/${id}/setup`}
              onClick={() => {}}
              className={classNames(
                "text-center text-white p-2 mt-3 rounded-xl shadow text-sm bg-emerald-600"
              )}
            >
              Add Schedule
            </NavLink>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg mt-5 border w-[75%] ">
        <div className="grid md:grid-cols-1 text-sm self-stretch px-5 py-5 ">
          {/* Lịch hoạt động */}
          <div className="flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
            <span className="tracking-wide text-center text-emerald-600 text-[30px] ">
              Lịch hoạt động
            </span>
          </div>
          <div className="flex items-center text-center space-x-2 font-semibold justify-center">
            <TableCalendar />
          </div>
        </div>

        {/* <div className="grid md:grid-cols-1 text-sm self-stretch px-5 py-5 w-full"> */}
        {/* <div className="flex items-center text-center space-x-2 font-semibold text-green-500 justify-center">
                  <span className="tracking-wide text-center text-emerald-600 text-[30px] ">
                    Lịch Biểu
                  </span>                
                </div> */}
        {/* Lịch hoạt động */}
        {/* <div className="flex items-center text-center space-x-2 font-semibold justify-center mt-5">
                  <CalendarDecive/>
                </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
