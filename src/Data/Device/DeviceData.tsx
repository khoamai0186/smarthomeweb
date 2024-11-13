import { useEffect, useState } from "react";
import { useApi } from "../../hooks/UseApi";
import DeviceCard from "../../components/Card/DeviceCard";
import { useParams } from "react-router-dom";

type DeviceStruct = {
  room_id: string;
  name: string;
  status: string;
};

type Datatype = {
  device: DeviceStruct[];
};

export default function DeviceData() {
  const { room_id } = useParams();
  const [events, setEvents] = useState<DeviceStruct[]>([]);
  const [{ data, isLoading, isError }] = useApi<Datatype>(
    `https://smart-home-be.onrender.com/api/v1/${room_id}/device`
  );

  useEffect(() => {
    if (!isLoading && !isError && data && data.device !== undefined) {
      setEvents(() =>
        data.device.map((correspondingDevice) => ({
          room_id: correspondingDevice.room_id,
          name: correspondingDevice.name,
          status: correspondingDevice.status ? "ON" : "OFF",
        }))
      );
    }
  }, [data, isLoading, setEvents]);
  return (
    <div className="flex flex-wrap -mx-4 mt-[50px]">
      {events.map((event) => (
        <div key={event.name} className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/2">
          {/* <p>{event.name}</p> */}
          <DeviceCard event={event} />
        </div>
      ))}
    </div>
  );
}
