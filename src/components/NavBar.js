import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
    <div class="navbar-nav">
      <NavLink to="/" className ="nav-item nav-link ">
        Home
      </NavLink>
      <NavLink to="/apartments" className="nav-item nav-link">
        Apartments
      </NavLink>
      <NavLink to="/apartments/create" className="nav-item nav-link">
        Create Apartment
      </NavLink>
    </div>
    </nav>
  );
};

export default NavBar;

