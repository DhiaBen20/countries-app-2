import { Link, Outlet } from "react-router-dom";
import logo from "../assets/Logo.svg";
import hero from "../assets/hero-image-wr.jpg";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="h-72 -mb-12 bg-cover flex items-center justify-center"
      >
        <Link to={"/countries"}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
