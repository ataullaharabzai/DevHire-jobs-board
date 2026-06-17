import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>DevHire</h1>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/saved">Saved Jobs</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
        <div>
          <button>Browse Jobs</button>
          <button>Saved Jobs</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
