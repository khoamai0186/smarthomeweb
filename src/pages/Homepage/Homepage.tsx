import classNames from "classnames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Homepage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchGarden = async () => {
      try {
        const response = await fetch(
          `https://smart-home-be.onrender.com/api/v1/room`
        );
        // const response = await fetch(`http://localhost:8080/api/v1/room`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGarden();
  }, []);

  return (
    <div className={classNames("flex-1 min-h-screen p-5")}>
      <div
        className={classNames(
          "flex bg-red-200 p-4 rounded-xl shadow-md hover:shadow-2xl"
        )}
      >
        <div className={classNames("w-full border-2")}>
hhhe
        </div>
      </div>
      <div className={classNames("flex flex-wrap justify-evenly gap-y-5")}>
        {data.map((room: any, index: any) => (
          <div
            key={index}
            className={classNames(
              "border-2 w-[30%] h-2/5 rounded-2xl shadow-md hover:shadow-2xl hover:bg-gray-100",
              "flex-col"
            )}
          >
            <div onClick={() => navigate(`/dashboard/${room.id}`)}>
              <div className={classNames("py-4 px-5 flex flex-row")}>
                {/* <img
                  className="object-cover w-1/2 rounded-t-lg h-auto md:h-auto md:w-48"
                  src="/src/assets/farm2.jpg"
                  alt=""
                />
                <div className={classNames("flex justify-center w-1/2")}>
                  <div className={classNames("font-bold text-2xl")}>
                    {room.name}
                  </div>
                </div> */}
                {room.id === "room_0001" && (
                  <>
                    <img
                      className="object-cover w-1/2 rounded-t-lg h-auto md:h-auto md:w-48"
                      src="/src/assets/living_room.jpg"
                      alt=""
                    />
                    <div className={classNames("flex justify-center w-1/2")}>
                      <div className={classNames("font-bold text-2xl")}>
                        {room.name}
                      </div>
                    </div>
                  </>
                )}
                {room.id === "room_0002" && (
                  <>
                    <img
                      className="object-cover w-1/2 rounded-t-lg h-auto md:h-auto md:w-48"
                      src="/src/assets/master_bedroom.jpg"
                      alt=""
                    />
                    <div className={classNames("flex justify-center w-1/2")}>
                      <div className={classNames("font-bold text-2xl")}>
                        {room.name}
                      </div>
                    </div>
                  </>
                )}
                {room.id === "room_0003" && (
                  <>
                    <img
                      className="object-cover w-1/2 rounded-t-lg h-auto md:h-auto md:w-48"
                      src="/src/assets/master_bedroom.jpg"
                      alt=""
                    />
                    <div className={classNames("flex justify-center w-1/2")}>
                      <div className={classNames("font-bold text-2xl")}>
                        {room.name}
                      </div>
                    </div>
                  </>
                )}
                {room.id === "room_0004" && (
                  <>
                    <img
                      className="object-cover w-1/2 rounded-t-lg h-auto md:h-auto md:w-48"
                      src="/src/assets/kids_bedroom.jpg"
                      alt=""
                    />
                    <div className={classNames("flex justify-center w-1/2")}>
                      <div className={classNames("font-bold text-2xl")}>
                        {room.name}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
