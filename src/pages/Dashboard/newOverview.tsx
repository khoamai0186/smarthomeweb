import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PowerIcon, ClockIcon } from "@heroicons/react/24/outline";
import LightSwitch from "../../components/Swtich/Light";
import WifiSwitch from "../../components/Swtich/Wifi";
import { ReactElement } from "react";

// Define Room interface
interface Room {
  name: string;
  imageUrl: string;
}

// Mock data for rooms with images
const rooms: Room[] = [
  { name: "Living room", imageUrl: "/src/assets/livingroom.jpg" },
  { name: "Bedroom", imageUrl: "/src/assets/bedroom.jpg" },
  // { name: "Kids room", imageUrl: "path/to/kids-room.jpg" },
  { name: "Kitchen", imageUrl: "/src/assets/kitchen.jpg" },
  // { name: "Office", imageUrl: "path/to/office.jpg" },
  // { name: "Guest room", imageUrl: "path/to/guest-room.jpg" },
  // { name: "Pool", imageUrl: "path/to/pool.jpg" },
  // { name: "Boiler room", imageUrl: "path/to/boiler-room.jpg" },
  // { name: "Garage", imageUrl: "path/to/garage.jpg" },
];

// DeviceCard interface and component (unchanged)
interface DeviceCardProps {
  icon: ReactElement;
  value: string;
  label: string;
  color: string;
}

const DeviceCard: React.FC<DeviceCardProps> = ({
  icon,
  value,
  label,
  color,
}) => {
  const [isOn, setIsOn] = useState<boolean>(false); // Add state to control power status

  const togglePower = () => {
    setIsOn((prevState) => !prevState); // Toggle the power status
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-start justify-between space-y-2">
      <div className="flex justify-between w-full">
        <span className="material-icons text-gray-400">{icon}</span>
        {/* <button onClick={togglePower}>
          <PowerIcon
            className={`h-5 w-5 ${!isOn ? "text-green-500" : "text-red-500"}`}
          />
        </button> */}
        <WifiSwitch />
      </div>
      <div className={`text-2xl text-${color}-400 font-bold`}>{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // Function to handle room selection
  const handleRoomClick = (room: Room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="flex h-fit bg-gray-900 text-white">
      {/* Main Content */}
      <main className="flex-1 p-6 space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold">Hi, User!</h1>
            <p className="text-gray-400">
              Welcome, home! Great weather today - sun shining and a refreshing
              breeze
            </p>
          </div>
        </header>

        {/* Rooms Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Rooms</h2>
          <div className="flex flex-wrap gap-2">
            {rooms.map((room) => (
              <button
                key={room.name}
                onClick={() => handleRoomClick(room)}
                className={`px-4 py-2 rounded-full ${
                  selectedRoom?.name === room.name
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300"
                } hover:bg-gray-600`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </section>

        {/* Room Image Display */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Room Preview</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
            {selectedRoom ? (
              <img
                src={selectedRoom.imageUrl}
                alt={selectedRoom.name}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => navigate(`/dashboard/room_0001`)}
              />
            ) : (
              <p className="text-gray-400">Select a room to view</p>
            )}
          </div>
        </div>

        {/* Devices Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Devices in use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Device Cards */}
            <DeviceCard
              icon={<ClockIcon className="h-6 w-6 text-blue-500" />}
              value="12 min 07 sec"
              label="Samsung NEO"
              color="green"
            />
            <DeviceCard
              icon={<ClockIcon className="h-6 w-6 text-blue-500" />}
              value="+24°C"
              label="Samsung Split"
              color="yellow"
            />
            <DeviceCard
              icon={<ClockIcon className="h-6 w-6 text-blue-500" />}
              value="321 mb/sec"
              label="Samsung WiFi-3"
              color="blue"
            />
            <DeviceCard
              icon={<ClockIcon className="h-6 w-6 text-blue-500" />}
              value="+4°C"
              label="Samsung S-b-S"
              color="blue"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
