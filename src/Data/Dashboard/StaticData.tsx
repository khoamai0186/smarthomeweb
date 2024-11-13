import { useState, useEffect } from "react";
import { FaTemperatureEmpty, FaRegLightbulb } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
// import Statistic from "../../components/Card/StatisCard";
import Statistic from "../../components/Card/StatisCard_test";
import DashBoardHeader from "../../components/Header/DashBoardHeader";
import { useApi } from "../../hooks/UseApi";
import WeatherCard from "../../components/Card/WeatherCard";
import { useParams } from "react-router-dom";

type roomtype = {
  room_id: string;
  room_name: string;
  number_of_device: number;
  number_of_sensor: number;
};

type StatisType = {
  measure_at: string;
  sensor_id: string;
  value: string;
  unit: string;
};

type Datatype = {
  lastTemp: StatisType[];
  lastHumi: StatisType[];
  lastMois: StatisType[];
  lastLight: StatisType[];
};

type Datastruct = {
  room: roomtype[];
  data: Datatype;
};

export default function StaticData() {
  const { room_id } = useParams();
  const [{ data, isError }] = useApi<Datastruct>(
    `https://smart-home-be.onrender.com/api/v1/${room_id}`
  );
  const [temp, setTemp] = useState("Null");
  const [light, setLight] = useState("Null");
  const [humi, setHumi] = useState("Null");
  const [Utemp, UsetTemp] = useState("Null");
  const [Ulight, UsetLight] = useState("Null");
  const [Uhumi, UsetHumi] = useState("Null");

  useEffect(() => {
    if (isError) {
      setHumi("Null");
      setTemp("Null");
      setLight("Null");
    } else {
      if (data.data != undefined) {
        if (Array.isArray(data.data.lastHumi)) {
          if (data.data.lastHumi[0] != undefined) {
            setHumi(data.data.lastHumi[0].value);
            UsetHumi(data.data.lastHumi[0].unit);
          }
        }
        if (Array.isArray(data.data.lastTemp)) {
          if (data.data.lastTemp[0] != undefined) {
            setTemp(data.data.lastTemp[0].value);
            UsetTemp(data.data.lastTemp[0].unit);
          }
        }
        if (Array.isArray(data.data.lastLight)) {
          if (data.data.lastLight[0] != undefined) {
            setLight(data.data.lastLight[0].value);
            UsetLight(data.data.lastLight[0].unit);
          }
        }
        // console.log(data.data.lastHumi);
      }
    }
    // console.log(data);
  }, [isError, data]);

  var title;
  room_id === "room_0001" ? (title = "room 0001") : (title = "room 0002");

  return (
    <div className="h-screen">
      {/* Header */}
      <DashBoardHeader
        title={title}
        // subtitle="Welcome to your farm"
        className="mb-9 text-white"
      />
      {/* Card Statistic */}
      <div className="flex gap-x-[1%] h-96">
        <div className="flex flex-wrap w-full items-center gap-x-[5%] gap-y-[5%] center">
          <Statistic
            title="Nhiệt độ"
            value={temp}
            icon={<FaTemperatureEmpty />}
            unit={Utemp}
          />
          <Statistic
            title="Ánh sáng"
            value={light}
            icon={<FaRegLightbulb />}
            unit={Ulight}
          />
          <Statistic
            title="Độ ẩm không khí"
            value={humi}
            icon={<IoWaterOutline />}
            unit={Uhumi}
          />
        </div>
        <div className="w-[30%]">
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}
