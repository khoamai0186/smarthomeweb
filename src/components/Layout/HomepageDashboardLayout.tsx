import { Outlet } from "react-router-dom";
import HomepageSidebar from "../Sidebar/HomepageSidebar";
import RightSidebar from "../Sidebar/RightSidebar";

export default function HomepageDashboardLayout() {
  return (
    <div className="flex">
      <HomepageSidebar />
      <div className="flex-1 min-h-screen p-5">
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  );
}
