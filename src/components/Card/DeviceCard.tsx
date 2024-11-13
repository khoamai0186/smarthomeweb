import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
interface DeviceStruct {
  room_id: string;
  name: string;
  status: string;
  // Add other properties as needed
}

interface DeviceCardProps {
  event: DeviceStruct;
}
export default function DeviceCard({ event }: DeviceCardProps) {
  const { room_id } = useParams(); // Get the "room_id" from the URL
  const [upstatus, setStatus] = useState(event.status);
  const handleButtonClick = async () => {
    event.status = event.status === "ON" ? "OFF" : "ON";
    const respone = await axios({
      method: "POST",
      url: `https://smart-home-be.onrender.com/api/v1/${event.name}/change-device-status`,
      data: {
        room_id: room_id,
        name: event.name,
        status: upstatus,
      },
    });
    console.log(respone);
  };

  return (
    <div className="relative w-auto rounded-lg shadow-md border px-5">
      <div className="h-[35%] flex items-center justify-between pt-3">
        <div className="text-gray-500 font-semibold py-3 text-2xl">
          {event.name}
        </div>
        <NavLink to={`/dashboard/${room_id}/device/schedule/${event.room_id}`}>
          <button className="relative w-[50%] h-full text-3xl font-w bg-[#05966A] hover:bg-emerald-700 text-white rounded-full transition-all duration-300 hover:w-[100%] group">
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 text-sm -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Add Schedule
            </span>
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              +
            </span>
          </button>
          </NavLink>
      </div>
      {/* {status} */}
      <p>${event.status}</p>
      {event.status === "OFF" ? (
        <img
          onClick={() => {
            handleButtonClick();
            setStatus(event.status);
          }}
          src="/src/assets/offbutton.png"
          className="w-[30%] h-[30%] rounded-lg mb-3"
          alt="avatar"
          style={{ marginLeft: "10px" }}
        />
      ) : (
        <img
          src="/src/assets/onbutton.png"
          onClick={() => {
            handleButtonClick();
            setStatus(event.status);
          }}      
          className="w-[30%] h-[30%] rounded-lg mb-3"
          alt="avatar"
          style={{ marginLeft: "10px" }}
        />
      )}
      <div className="flex h-[25%] items-center justify-center relative max-lg:hidden">
        {event.name === "device_0001" || event.name === "device_0002" ? (
          event.status === "OFF" ? (
            <img
                src="/src/assets/lightbulb.png"
                className="w-[50%] h-[50%] rounded-lg mb-3"
                alt="avatar"
              />
            ) : (
              <img
                src="/src/assets/lightbulbon.png"
                className="w-[50%] h-[50%] rounded-lg mb-3"
                alt="avatar"
              />
            )
        ) : event.name === "device_0003" ? (
          event.status === "OFF" ? (
            <img
              src="/src/assets/lightbulb.png"
              className="w-[50%] h-[50%] rounded-lg mb-3"
              alt="avatar"
            />
          ) : (
            <img
              src="/src/assets/lightbulbon.png"
              className="w-[50%] h-[50%] rounded-lg mb-3"
              alt="avatar"
            />
          )
        ) : event.name === "device_0004" ? (
          event.status === "OFF" ? (
            <img
              src="/src/assets/fan.png"
              className="w-[50%] h-[50%] rounded-lg mb-3"
              alt="avatar"
            />
          ) : (
            <img
              src="/src/assets/fanon.png"
              className="w-[50%] h-[50%] rounded-lg mb-3"
              alt="avatar"
            />
          )
        ) : null}
      </div>
      <div className="h-[15%]"></div>
    </div>
  );
}
