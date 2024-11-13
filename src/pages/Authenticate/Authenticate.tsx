import { default as classnames } from "classnames";
import { Outlet } from "react-router-dom";
export default function Authenticate() {
  return (
    <div className="bg-[url('/src/assets/SmartHomes2.jpg')] bg-cover bg-center h-full">
      <div
        className={classnames(
          "flex flex-col md:flex-row gap-12",
          `min-h-[75vh] mb-36`
        )}
      >
        <div className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12 ">
          <Outlet />
        </div>
        {/* Browse Job Frame */}
        <div
          className={classnames(
            `bg-[#1d3e41] rounded-3xl px-6 py-4`,
            `shadow-md`,
            "mt-10",
            `relative flex-1 flex flex-col gap-6`,
            `opacity-80` // Add the opacity class here
          )}
        >
          <h1
            className={classnames(
              `text-white`,
              `font-bold text-3xl leading-10`
            )}
          >
            The world is currently very developed, which means that technology
            is very evolving
          </h1>
          <p className={classnames(`text-white text-[20px]`, `leading-tight`)}>
            Smart home devices that save energy better than conventional home
            appliances. Thanks to the ability to control and control remotely,
            you can monitor the operating status of the devices in your home and
            have an appropriate energy saving plan.
          </p>

          <div className="flex flex-row">
            <button className={classnames(`border`, `px-3 py-1 rounded-xl`)}>
              <div className="text-white ">Abourt Us</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
