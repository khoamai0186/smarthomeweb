import classNames from "classnames";
import Carousel from "../../components/Carousel/Carousel";
import TempChart from "../../components/Chart/TempChart";
import { LightBulbIcon, WifiIcon } from "@heroicons/react/24/outline";
import LightSwitch from "../../components/Swtich/Light";
import FanSwitch from "../../components/Swtich/Fan";
import WifiSwitch from "../../components/Swtich/Wifi";
import CamSwitch from "../../components/Swtich/CamSwitch";
// import { useEffect, useState } from "react";

export default function Overview() {
  let slides = [
    {
      url: "/src/assets/kitchen.jpg",
      name: "Kitchen",
    },
    {
      url: "/src/assets/livingroom.jpg",
      name: "Living Room",
    },
    {
      url: "/src/assets/bedroom.jpg",
      name: "Bedroom",
    },
  ];

  const data = [20, 30, 40, 50, 60, 43, 23]; // example data values
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div
      className={classNames("flex flex-col p-4 h-full lg:gap-y-4 md:gap-y-2")}
    >
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-white">Hi, Jane!</h1>
          <p className="text-gray-300">
            Welcome, home! Great weather today - sun shining and a refreshing
            breeze
          </p>
        </div>
      </header>
      <div
        className={classNames("flex flex-col w-full lg:gap-4 md:gap-2 h-full")}
      >
        <div className={classNames("flex w-full h-3/4 lg:gap-4 md:gap-2")}>
          <div className={classNames("w-3/5 p-2 bg-slate-700")}>
            <Carousel slides={slides} />
          </div>
          <div
            className={classNames("flex flex-col lg:gap-4 md:gap-2", "w-2/5")}
          >
            {/* Do something? */}
            <div className={classNames("bg-slate-700", "w-full h-1/2 p-2")}>
              Something will happen
            </div>
            <div
              className={classNames(
                "flex flex-row lg:gap-4 md:gap-2",
                "w-full h-1/2"
              )}
            >
              {/* Chart Temp in week */}
              <div
                className={classNames(
                  "bg-slate-700",
                  "w-1/2 h-full flex flex-col"
                )}
              >
                <div
                  className={classNames(
                    "text-slate-400 font-extralight text-lg",
                    "p-2 h-fit w-fit"
                  )}
                >
                  Highest Temperature
                </div>
                <div className="flex flex-col justify-center items-center h-full py-2">
                  <TempChart data={data} labels={labels} />
                  <div
                    className={classNames(
                      "w-fit h-fit px-2 py-1 bottom-0",
                      "bg-blue-950 rounded-2xl hover:bg-slate-600 hover:cursor-pointer",
                      "text-white text-xs font-bold"
                    )}
                  >
                    SEE MORE INFO
                  </div>
                </div>
              </div>

              {/* Number of Devices */}
              <div
                className={classNames(
                  "bg-slate-700",
                  "flex flex-col w-1/2 h-full"
                )}
              >
                <div
                  className={classNames(
                    "text-slate-400 font-extralight text-lg",
                    "p-2 w-fit h-fit"
                  )}
                >
                  Number of Devices
                </div>
                <div className="flex flex-col justify-center items-center h-full py-2">
                  <div
                    className={classNames(
                      "flex justify-center items-center w-full h-full",
                      "lg:text-4xl md:text-3xl text-white font-extralight"
                    )}
                  >
                    {/* Total of devices will be here */} 8
                  </div>
                  <div
                    className={classNames(
                      "w-fit h-fit px-2 py-1 bottom-0",
                      "bg-blue-950 rounded-2xl hover:bg-slate-600 hover:cursor-pointer",
                      "text-white text-xs font-bold"
                    )}
                  >
                    SEE MORE INFO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            "w-full h-1/4",
            "flex flex-row lg:gap-4 md:gap-2 p-4"
          )}
        >
          {/* Light */}
          <div className="w-1/4 bg-slate-700 rounded-lg flex">
            <div className="w-1/3 h-full flex justify-center items-center">
              <LightBulbIcon className="w-14 h-14 text-white" />
            </div>
            <div className="w-2/3 h-full text-white text-xl font-semibold flex flex-col items-start p-4">
              <div className="w-full flex justify-end items-center">
                <LightSwitch />
              </div>
              Lights
            </div>
          </div>
          {/* Fan */}
          <div className="w-1/4 bg-slate-700 rounded-lg flex">
            <div className="w-1/3 h-full flex justify-center items-center">
              <div className={`w-14 h-14 hover:animate-spin`}>
                <img src="/src/assets/fan_icon2.png" />
              </div>
            </div>
            <div className="w-2/3 h-full text-white text-xl font-semibold flex flex-col items-start p-4">
              <div className="w-full flex justify-end items-center">
                <FanSwitch />
              </div>
              Fans
            </div>
          </div>
          {/* Wifi */}
          <div className="w-1/4 bg-slate-700 rounded-lg flex">
            <div className="w-1/3 h-full flex justify-center items-center">
              <WifiIcon className="w-14 h-14 text-white" />
            </div>
            <div className="w-2/3 h-full text-white text-xl font-semibold flex flex-col items-start p-4">
              <div className="w-full flex justify-end items-center">
                <WifiSwitch />
              </div>
              Wifi
            </div>
          </div>
          {/* dunno */}
          <div className="w-1/4 bg-slate-700 rounded-lg flex">
            <div className="w-1/3 h-full flex justify-center items-center">
              <div className={`w-14 h-14`}>
                <img src="/src/assets/webcam_icon.png" />
              </div>
            </div>
            <div className="w-2/3 h-full text-white text-xl font-semibold flex flex-col items-start p-4">
              <div className="w-full flex justify-end items-center">
                <CamSwitch />
              </div>
              Camera
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
