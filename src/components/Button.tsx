import { NavLink } from "react-router-dom";
import { useSavedJobs } from "../contexts/savedJobsContext";

interface Btn {
  text: string;
  visit: string;
  className: string;
  onClick?: () => void
}

function Button({ text, visit, className, onClick }: Btn) {


  return (
    <>
      <NavLink
        className={`md:px-6 md:py-3 px-4 py-2 rounded-md transition-all ${className}`}
        to={visit}
        onClick={onClick}
      >
        {text}
      </NavLink>
    </>
  );
}

export default Button;
