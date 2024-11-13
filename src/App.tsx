// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//
import Home from "./pages/Homepage/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
//
import Authenticate from "./pages/Authenticate/Authenticate";
import AuthenticateLogin from "./pages/Authenticate/AuthenticateLogin";
//
import CompleteConfirmEmail from "./pages/EmailConfirmation/CompleteConfirmEmail";
import EmailConfirmationLayout from "./pages/EmailConfirmation/EmailConfirmationLayout";
import IncompleteConfirmEmail from "./pages/EmailConfirmation/IncompleteConfirmEmail";
import ConfirmPassword from "./pages/ForgetPassword/ConfirmPassword";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ForgetPasswordLayout from "./pages/ForgetPassword/ForgetPasswordLayout";
import HomeAppLayout from "./components/Layout/HomeAppLayout";
import Logout from "./pages/Logout/Logout";
//
import Calendar from "./pages/Calendar";
import DashBoardLayout from "./components/Layout/DashboardLayout";
import Device from "./pages/Device/Device";
import SetupCalendar from "./components/Calendar/CreactCalendar";
import DeviceInfo from "./pages/DeviceInfo";
import EditCalendar from "./components/Calendar/EditCalendar";
import StaticData from "./Data/Dashboard/StaticData";
import Statistic from "./pages/Chart/Chart";
import FilterNonLogin from "./components/Routers/FilterNonLogin";

import OneTimePasswordVerify from "./pages/OneTimePasswordVerify/OneTimePasswordVerify";
import NotFound from "./components/NotFound/NotFound";
//import Homepage from "./pages/Homepage/Homepage";
import Overview from "./pages/Dashboard/Overview";
import Dashboard from "./pages/Dashboard/newOverview";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Router />
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeAppLayout />}>
            <Route index element={<Home />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="auth" element={<Authenticate />}>
              <Route path="login" element={<AuthenticateLogin />} />
              <Route element={<AuthenticateLogin />} />
            </Route>

            {/* This route is accepted when user is not logged in */}
            <Route element={<FilterNonLogin />}>
              <Route path="/email" element={<EmailConfirmationLayout />}>
                <Route path="incomplete" element={<IncompleteConfirmEmail />} />
                <Route path="complete" element={<CompleteConfirmEmail />} />
              </Route>
              <Route path="otp" element={<OneTimePasswordVerify />} />
              <Route path="/forget-password" element={<ForgetPasswordLayout />}>
                <Route index element={<ForgetPassword />} />
                <Route path="confirm-password" element={<ConfirmPassword />} />
              </Route>
            </Route>
          </Route>

          {/* This route is only accepted when user is logged in and/or token is not broken  */}
          <Route path="/dashboard" element={<DashBoardLayout />}>
            {/* <Route index element={<Homepage />} /> */}
            <Route index element={<Dashboard />} />
            <Route path=":room_id" element={<StaticData />}></Route>
            <Route path=":room_id/statistics" element={<Statistic />}></Route>
            <Route path=":room_id/device" element={<Device />}></Route>
            <Route path=":room_id/device/:id" element={<DeviceInfo />}>
              {" "}
            </Route>
            <Route path=":room_id/calendar" element={<Calendar />}>
              {" "}
            </Route>
            <Route
              path=":room_id/device/schedule/:device_id"
              element={<SetupCalendar />}
            ></Route>
            <Route
              path="eventsdevice/:idevents/edit"
              element={<EditCalendar />}
            ></Route>
            {/* <Route path="slider" element={<Carousel />}></Route> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
