import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useParams } from "react-router-dom";

export default function Statistic() {
  const [humiData, setHumiData] = useState<any>([]);
  const [tempData, setTempData] = useState<any>([]);
  const [lightData, setLightData] = useState<any>([]);
  const { room_id } = useParams();

  useEffect(() => {
    const fetchroom = async () => {
      try {
        const response = await fetch(
          `https://smart-home-be.onrender.com/api/v1/${room_id}/data-table`
        );
        const data = await response.json();
        setHumiData(data.humiData);
        console.log(data.humiData);
        setTempData(data.tempData);
        setLightData(data.lightData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchroom();
    console.log(lightData);
  }, []);

  const humi_value = humiData.map(({ value }: any) => value);
  const humi_date = humiData.map(({ created_at }: any) => created_at);

  const temp_value = tempData.map(({ value }: any) => value);
  const temp_date = tempData.map(({ created_at }: any) => created_at);

  const light_value = lightData.map(({ value }: any) => value);
  const light_date = lightData.map(({created_at }: any) => created_at);

  const state = {
    options: {
      chart: {
        id: "humidity",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: humi_date,
      },
    },
    series: [
      {
        name: "Air Humidity",
        data: humi_value,
      },     
    ],
  };
  const tempState = {
    options: {
      chart: {
        id: "temp",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: temp_date,
      },
    },
    series: [
      {
        name: "Temp",
        data: temp_value,
      },
    ],
  };
  const lightState = {
    options: {
      chart: {
        id: "light",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: light_date,
      },
    },
    series: [
      {
        name: "Light",
        data: light_value,
      },
    ],
  };

  // const type = "bar";

  return (
    <div className="w-full py-5">
      <div className="flex justify-center items-center">
        <div className="lg:w-[70%] md:w-[90%]">
          <div className="chartContainer flex flex-col justify-center items-center border-2 rounded-xl shadow-inner">
            <span className="font-semibold text-2xl p-2">Humidity</span>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              // width="700"
              className="w-full z-0"
            />
          </div>
          <div className="py-5">
            <div className="flex flex-col justify-center items-center border-2 rounded-xl shadow-inner">
              <span className="font-semibold text-2xl p-2">Temperature</span>
              <Chart
                options={tempState.options}
                series={tempState.series}
                type="line"
                // width="700"
                className="w-full z-0"
              />
            </div>
          </div>
          <div className="py-5">
            <div className="flex flex-col justify-center items-center border-2 rounded-xl shadow-inner">
              <span className="font-semibold text-2xl p-2">Light</span>
              <Chart
                options={lightState.options}
                series={lightState.series}
                type="line"
                // width="700"
                className="w-full z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
