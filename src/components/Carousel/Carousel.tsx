import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Carousel({ slides }: any) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    const index = current === 0 ? slides.length - 1 : current - 1;
    setCurrent(index);
  };

  const nextSlide = () => {
    const index = current === slides.length - 1 ? 0 : current + 1;
    setCurrent(index);
  };

  // Setup auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // move to the next slide automatically
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [current, slides.length]); // Rerun the effect if `current` or `slides.length` changes

  return (
    <div className="overflow-hidden relative h-full flex justify-center items-center">
      <div className="absolute -top-1 w-fit h-fit text-slate-400 font-extralight text-lg">
        {current === 1 ? "Living room" : current === 0 ? "Kitchen" : "Bed room"}
        <div
          className="flex transition ease-out duration-300"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s: any, index: any) => (
            <>
              <img
                key={index}
                className="object-scale-down max-h-full m-auto hover:cursor-pointer"
                src={s.url}
                alt={`Slide ${s.name}`}
                onClick={() => navigate(`/dashboard/room_000${index + 1}`)}
              />
            </>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 py-3 px-2 flex justify-center items-center gap-3 w-fit bg-blue-950 rounded-3xl ">
        <button
          className="text-gray-500 text-2xl hover:text-white"
          onClick={previousSlide}
        >
          <BsFillArrowLeftCircleFill />
        </button>
        {slides.map((s: any, index: any) => (
          <div
            key={`circle-${index}`}
            onClick={() => setCurrent(index)}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
        <button
          className="text-gray-500 text-2xl hover:text-white"
          onClick={nextSlide}
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
}
