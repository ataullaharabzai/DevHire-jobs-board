import { NavLink } from "react-router-dom";
import type React from "react";

interface Btn {
  text: string;
  visit: string;
  className: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

function Button({ text, visit, className, onClick, icon }: Btn) {
  return (
    <>
      <NavLink
        className={`md:px-6 md:py-3 px-4 py-2 rounded-md transition-all ${className} flex items-center gap-3`}
        to={visit}
        onClick={onClick}
      >
        <span>{text}</span>
        {icon}
      </NavLink>
    </>
  );
}

export default Button;
