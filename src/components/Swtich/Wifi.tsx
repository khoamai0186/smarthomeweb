// Chưa có làm
// Nào có rồi làm

import axios from "axios";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { PowerIcon } from "@heroicons/react/24/outline";

const WifiSwitch = () => {
  // console.log(state);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [enabled, setEnabled] = useState<boolean>(false);
  const [state, setState] = useState([]);
  //   useEffect(() => {
  //     const fetchLight = async () => {
  //       try {
  //         const response = await fetch(
  //           // `https://smart-home-be.onrender.com/api/v1/room`
  //           `${apiUrl}/api/v1/device/light`
  //         );
  //         const state = await response.json();
  //         setState(state);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchLight();
  //     state.length != 0 ? setEnabled(true) : setEnabled(false);
  //   });

  const handleButtonClick = async () => {
    // const boolState = !enabled === false ? 0 : 1;
    // try {
    //   const response = await axios({
    //     method: "PUT",
    //     url: `${apiUrl}/api/v1/device/lightswitch`,
    //     data: {
    //       status: boolState,
    //     },
    //   });
    //   console.log(response);
    // } catch (error: any) {
    //   if (error) {
    //     console.log(error);
    //   }
    //   // console.log(respone);
    // };
    setEnabled(!enabled);
  };

  return (
    <label className="inline-flex relative items-center cursor-pointer h-fit">
      {/* <input
        type="checkbox"
        className="sr-only peer" // sr-only hides the checkbox visually
        checked={enabled}
        // onChange={() => setEnabled(!enabled)}
        onChange={() => handleButtonClick()}
      /> */}
      {/* <div
        className={classNames(
          "w-11 h-4 bg-slate-800 rounded-full peer mt-1",
          "after:content-[''] after:absolute after:top-0.5 after:left-[2px]  after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5 ",
          "peer-checked:after:bg-blue-600 peer-checked:after:translate-x-5"
        )}
      ></div> */}
      <button onClick={() => handleButtonClick()}>
        <PowerIcon
          className={`h-5 w-5 ${!enabled ? "text-green-500" : "text-red-500"}`}
        />
      </button>
    </label>
  );
};

export default WifiSwitch;
