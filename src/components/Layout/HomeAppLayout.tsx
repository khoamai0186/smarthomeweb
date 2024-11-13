import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import NavbarHome from "../Navbar/NavbarHome";

export default function HomeAppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarHome />
      <div className="flex-grow flex">
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
}
