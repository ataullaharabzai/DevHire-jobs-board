import { NavLink } from "react-router-dom";

interface Btn {
  text: string;
  visit: string;
  className: string;
}

function Button({ text, visit, className }: Btn) {
  return (
    <>
      <NavLink
        className={`md:px-6 md:py-3 px-4 py-2 rounded-md transition-all ${className}`}
        to={visit}
      >
        {text}
      </NavLink>
    </>
  );
}

export default Button;
