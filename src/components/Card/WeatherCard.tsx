import classNames from "classnames";
import { SunIcon, CloudIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function WeatherCard() {
  const [data, setData] = useState<any>(null);
  const [temp, setTemp] = useState<any>(null);
  // const [light, setLight] = useState("Null");
  // const [humi, setHumi] = useState("Null");
  // const [moils, setMoils] = useState("Null");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ho-chi-minh?key=R6VJLKNYBLB3QPYY4XNE28GFQ`
        );
        const data = await response.json();
        setTemp(data.currentConditions.temp);
        setData(data.days[0]);
        // console.log("hehehaha");
        // console.log(temp);
      } catch (error) {
        console.log(error);
      }
      // return data;
    };
    fetchWeather();
    console.log(data);
  }, []);

  return (
    <>
      <div className={classNames("rounded-lg border-4")}>
        <div className={classNames("flex items-center justify-around")}>
          <div className="flex flex-col p-4">
            <div className="text-4xl font-semibold text-gray-100">
              {(((temp - 32) * 5) / 9).toFixed(1)}
            </div>
            <div
              className={classNames(
                "font-light text-sm text-gray-100",
                "-my-2 "
              )}
            >
              Ho Chi Minh City
            </div>
          </div>
          <div className="p-4">
            <SunIcon className="w-16 h-16 text-yellow-400 animate-spin-slow" />
          </div>
        </div>
        {data ? (
          <div className="w-full flex flex-row justify-center items-center gap-x-[4%] p-4">
            <div
              className={classNames(
                "flex flex-col w-[23%] justify-center items-center"
              )}
            >
              <div className="text-lg font-semibold text-gray-100">
                {(((data.hours[7].feelslike - 32) * 5) / 9).toFixed(1)}
              </div>
              <div className="p-1">
                <SunIcon className="w-8 h-8 text-gray-500" />
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                {"07:00"}
              </div>
            </div>
            <div
              className={classNames(
                "flex flex-col w-[23%] justify-center items-center text-gray-100"
              )}
            >
              <div className="text-lg font-semibold">
                {(((data.hours[11].feelslike - 32) * 5) / 9).toFixed(1)}
              </div>
              <div className="p-1">
                <SunIcon className="w-8 h-8 text-gray-500" />
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                {"11:00"}
              </div>
            </div>
            <div
              className={classNames(
                "flex flex-col w-[23%] justify-center items-center text-gray-100"
              )}
            >
              <div className="text-lg font-semibold">
                {(((data.hours[15].feelslike - 32) * 5) / 9).toFixed(1)}
              </div>
              <div className="p-1">
                <CloudIcon className="w-8 h-8 text-gray-500" />
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                {"15:00"}
              </div>
            </div>{" "}
            <div
              className={classNames(
                "flex flex-col w-[23%] justify-center items-center text-gray-100"
              )}
            >
              <div className="text-lg font-semibold">
                {(((data.hours[19].feelslike - 32) * 5) / 9).toFixed(1)}
              </div>
              <div className="p-1">
                <MoonIcon className="w-8 h-8 text-gray-500" />
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                {"19:00"}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
