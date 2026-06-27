import { NavLink } from "react-router-dom";
import Button from "../components/Button";

function Navbar() {
  return (
    <header className="text-[14px] md:text-[18px] w-full text-[#4e525a] flex justify-around items-center shadow-2xl shadow-[#e6ebfd] p-4 md:p-6">
      <NavLink to='/' className="md:text-4xl text-2xl font-bold text-[#143cf4] ml-3 md:ml-0">
        DevHire
      </NavLink>
      <nav className="w-85 hidden lg:block">
        <ul className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#143cf4] font-semibold" : "font-semibold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? "text-[#143cf4] font-semibold" : "font-semibold"
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              isActive ? "text-[#143cf4] font-semibold" : "font-semibold"
            }
          >
            Saved Jobs
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#143cf4] font-semibold" : "font-semibold"
            }
          >
            About
          </NavLink>
        </ul>
      </nav>
      <div className="md:w-85 w-96 flex justify-center items-center gap-4 p-4">
        <Button
          text="Browse Jobs"
          visit="/jobs"
          className="shadow shadow-gray-400 hover:text-white hover:bg-[#143cf4] text-[#143cf4] text-[10px] md:text-[15px]"
        />
        <Button
          text="Profile"
          visit="/profile"
          className="bg-[#143cf4] hover:bg-[#0428c4] text-white text-[10px] md:text-[14px]"
        />
      </div>

      <section
        className="bottomNav bg-white/5
            backdrop-blur-sm
            border border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.2)]
            z-50 w-full fixed bottom-5 p-3 rounded-full flex justify-around items-center max-w-70 sm:max-w-100 lg:hidden"
      >
        <NavLink
          to="/"
          className={`flex justify-center items-center flex-col gap-1`}
        >
          <i className="fa-solid fa-house"></i>
          <p className="text-[10px] md:text-[14px] font-semibold">Home</p>
        </NavLink>
        <NavLink
          to="/jobs"
          className={`flex justify-center items-center flex-col gap-1`}
        >
          <i className="fa-solid fa-briefcase"></i>
          <p className="text-[10px] md:text-[14px] font-semibold">Jobs</p>
        </NavLink>
        <NavLink
          to="/saved"
          className={`flex justify-center items-center flex-col gap-1`}
        >
          <i className="fa-solid fa-bookmark"></i>
          <p className="text-[10px] md:text-[14px] font-semibold">Saved</p>
        </NavLink>
        <NavLink
          to="/about"
          className={`flex justify-center items-center flex-col gap-1`}
        >
          <i className="fa-solid fa-circle-info"></i>
          <p className="text-[10px] md:text-[14px] font-semibold">About</p>
        </NavLink>
      </section>
    </header>
  );
}

export default Navbar;
