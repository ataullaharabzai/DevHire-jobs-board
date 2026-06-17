import { NavLink } from "react-router-dom";
import Button from "../components/Button";

function Navbar() {
  return (
    <header className="text-[14px] md:text-[18px] w-full p-4 text-[#4e525a] flex justify-around items-center shadow-2xl shadow-[#e6ebfd]">
      <h1 className="md:text-4xl font-bold text-[#143]">DevHire</h1>
      <nav className="w-85">
        <ul className="flex justify-between items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#143] font-semibold" : "font-semibold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? "text-[#143] font-semibold" : "font-semibold"
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              isActive ? "text-[#143] font-semibold" : "font-semibold"
            }
          >
            Saved Jobs
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#143] font-semibold" : "font-semibold"
            }
          >
            About
          </NavLink>
        </ul>
      </nav>
      <div className="w-85 flex justify-center items-center gap-4 p-3">
        <Button
          text="Browse Jobs"
          visit="/jobs"
          className="shadow shadow-gray-400 hover:text-white hover:bg-[#143] text-[#143]"
        />
        <Button
          text="Profile"
          visit="/profile"
          className="bg-[#143] text-white"
        />
      </div>
    </header>
  );
}

export default Navbar;
