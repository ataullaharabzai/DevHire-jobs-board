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
        className={`md:px-5 md:py-2 px-3 py-2 rounded-sm transition-all ${className}`}
        to={visit}
      >
        {text}
      </NavLink>
    </>
  );
}

export default Button;
