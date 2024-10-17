import { Link, Outlet } from "react-router-dom";
import logo from "../assets/Logo.svg";
import hero from "../assets/hero-image-wr.jpg";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#1B1D1F]">
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="h-72 -mb-12 bg-cover flex items-center justify-center"
      >
        <Link to={"/countries"}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="[&_>_div]:bg-[#1B1D1F] [&_>_div]:border [&_>_div]:border-[#282B30] [&_>_div]:rounded-xl text-[#6C727F] [&_>_div]:shadow-xl pb-16">
          <Outlet />
      </div>
    </div>
  );
}
