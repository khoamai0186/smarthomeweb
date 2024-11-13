import { useRoutes } from "react-router-dom";
// import Dashboard from "../pages/Dashboard/Dashboard";
import Calendar from "../pages/Calendar";
import DashBoardLayout from "../components/Layout/DashboardLayout";
import UserAppLayout from "../components/Layout/UserAppLayout";
import Device from "../pages/Device/Device";
// import Plant from "../pages/Plant";
import SetupCalendar from "../components/Calendar/CreactCalendar";
import DeviceInfo from "../pages/DeviceInfo";
import EditCalendar from "../components/Calendar/EditCalendar";
import StaticData from "../Data/Dashboard/StaticData";
import Homepage from "../pages/Homepage/Homepage";
import HomepageDashboardLayout from "../components/Layout/HomepageDashboardLayout";
import Statistic from "../pages/Chart/Chart";
import Slider from "../pages/Dashboard/Overview";
// import { element } from "prop-types";
export default function Router() {
  const routes = useRoutes([
    {
      element: <UserAppLayout />,
      children: [
        {
          element: <HomepageDashboardLayout />,
          children: [{ path: "/", element: <Homepage />, index: true }],
        },
        {
          element: <DashBoardLayout />,
          children: [
            {
              path: "/:garden_id",
              element: <StaticData />,
            },
            { path: ":garden_id/statistics", element: <Statistic /> },
            { path: ":garden_id/calendar", element: <Calendar /> },
            { path: ":garden_id/device", element: <Device /> },
            { path: ":garden_id/device/:id", element: <DeviceInfo /> },
            {
              path: ":garden_id/device/schedule/:device_id",
              element: <SetupCalendar />,
            },
            {
              path: "eventsdevice/:idevents/edit",
              element: <EditCalendar />,
            },
            { path: ":garden_id/slider", element: <Slider /> },
            // { path: "plant", element: <Plant /> },
          ],
        },
      ],
    },
  ]);

  return routes;
}
