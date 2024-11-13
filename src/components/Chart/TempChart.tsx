// import React from "react";

const TempChart = ({ data, labels }: any) => {
  // Find the maximum value to scale the bars relatively
  const maxValue = Math.max(...data);

  return (
    <div className="flex flex-col items-center space-y-2 h-full w-full lg:p-3 md:p-1">
      <div className="flex items-center justify-around h-full w-full">
        {data.map((value: any, index: any) => (
          <div
            key={index}
            className="flex flex-col items-center justify-end h-full w-full"
          >
            <div
              className="bg-blue-500 transition-all duration-300 hover:bg-blue-700 rounded-xl lg:w-[17px] md:w-[13px]"
              style={{
                height: `${(value / maxValue) * 85}%`, // scale height based on max value
                // width: "13px", // fixed width for each bar
                minHeight: "10px", // minimum height to ensure visibility
              }}
              title={`${value}`} // tooltip on hover to show value
            ></div>
            <div className="mt-2 text-sm text-slate-400">{labels[index]}</div>
          </div>
        ))}
      </div>
      {/* Horizontal Axis */}
    </div>
  );
};

export default TempChart;
