import { ReactNode } from "react";
import { IconContext } from "react-icons";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

type StatisticProps = {
  title: string;
  value: string;
  unit: string;
  icon: ReactNode | string;
  sx?: object;
  other?: object;
};

export default function Statistic({
  title,
  value,
  unit,
  icon,
}: StatisticProps) {
  return (
    <div className="relative w-[45%] rounded-lg shadow-md border px-5 h-[80%]">
      <div className="h-[25%] flex items-center justify-between pt-3">
        <div className="text-gray-100 font-semibold py-3 text-2xl">{title}</div>
        <div className=" text-gray-100">
          <IconContext.Provider value={{ size: "30" }}>
            {icon}
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex h-[55%] items-center justify-center">
        <div className="flex items-end">
          <div className="text-4xl py-6 text-gray-100">{value}</div>
          <div className="text-xl py-6 px-4 text-gray-100">{unit}</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-[10%] font-light px-2 text-gray-100">Normal</div>
        <HandThumbUpIcon className="w-6 h-6 animate-bounce text-gray-100" />
      </div>
      <div className="h-[10%]"></div>
    </div>
  );
}
