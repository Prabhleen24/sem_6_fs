import { NavLink } from "react-router-dom";

function TopNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand fw-semibold">My Portfolio</span>

      <ul className="navbar-nav ms-auto gap-4">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/degree">My Degree</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/skills">Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavbar;
