import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import RightSidebar from "../Sidebar/RightSidebar";
import Navbar from "../Navbar/Navbar";

export default function DashBoardLayout() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 h-full p-5 bg-slate-800">
          <Outlet />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}
