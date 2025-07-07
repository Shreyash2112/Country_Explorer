import { NavLink } from "react-router";
import logo from "../images/image.png";

export default function Navbar() {
  return (
    <header className="w-full bg-white text-gray-700 text-lg px-10 h-auto border-b-1 border-b-gray-300">
      <div className="container flex flex-row items-center justify-start">
        <div className="w-48">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-10 bg-transparent inline" />
          </NavLink>
        </div>
        <nav className="flex gap-10 ">
          <NavLink
            to="/"
            className={({ isActive }): string => {
              return isActive ? "text-indigo-800 font-bold" : "text-gray-700";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }): string => {
              return isActive ? "text-indigo-800 font-bold" : "text-gray-700";
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/countries"
            className={({ isActive }): string => {
              return isActive ? "text-indigo-800 font-bold" : "text-gray-700";
            }}
          >
            Countries
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
