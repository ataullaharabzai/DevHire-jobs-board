import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-5 md:p-15">
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center flex-wrap">
        <div className="w-full max-w-75 flex justify-center gap-5 md:gap-0 md:justify-between items-center text-[#4e525a] text-[11px] sm:text-[17px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#143cf4] font-semibold"
                : "hover:text-[#143cf4] font-semibold"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? "text-[#143cf4] font-semibold"
                : "hover:text-[#143cf4] font-semibold"
            }
          >
            Jobs
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              isActive
                ? "text-[#143cf4] font-semibold"
                : "hover:text-[#143cf4] font-semibold"
            }
          >
            Saved Jobs
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#143cf4] font-semibold"
                : "hover:text-[#143cf4] font-semibold"
            }
          >
            About
          </NavLink>
        </div>
        <div className="text-[#4e525a] w-full max-w-20 flex justify-around items-center">
          <a href="https://linkedin.com/in/ataullah-dev">
            <i className="fa-brands fa-linkedin-in md:text-2xl text-[#143cf4]"></i>
          </a>
          <a href="https://github.com/ataullaharabzai">
            <i className="fa-brands fa-github md:text-2xl text-[#143cf4]"></i>
          </a>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center md:mt-10 mt-5 gap-5 md:gap-0">
        <div className="w-full max-w-96 p-2 flex justify-center items-center flex-col md:gap-5">
          <NavLink
            to="/"
            className="md:text-4xl text-2xl font-bold text-[#143cf4] ml-3 md:ml-0"
          >
            DevHire
          </NavLink>
        </div>
        <div className="text-[#4e525a] w-full max-w-75 text-[12px] md:text-[16px] md:text-right text-center">
          <p>©2026 All Rights Reserved.</p>
          <p>Made with 💙 by Ataullah ARABZAI</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
