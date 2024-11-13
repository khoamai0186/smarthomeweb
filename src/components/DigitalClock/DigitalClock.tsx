import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (value: any) => (value < 10 ? `0${value}` : value);

  const hours = formatTime(dateTime.getHours());
  const minutes = formatTime(dateTime.getMinutes());
  const seconds = formatTime(dateTime.getSeconds());
  //   const date = dateTime.toLocaleDateString();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = dateTime.toLocaleString("en-US", options); // or "vn-VN"

  return (
    <div className="digital-clock flex flex-col w-fit h-fit border-2 border-slate-900 px-2 rounded-xl shadow-inner justify-center items-center bg-slate-700">
      <span className="text-3xl text-white font-extrabold">
        {hours}:{minutes}:{seconds}
      </span>
      <span className="font-light text-sm text-white">{date}</span>
    </div>
  );
};

export default DigitalClock;
