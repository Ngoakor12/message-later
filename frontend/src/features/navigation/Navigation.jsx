import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink
        to={"/today"}
        className={({ isActive }) =>
          isActive ? "nav-item active-nav-item" : "nav-item"
        }
      >
        Today
      </NavLink>
      <NavLink
        to={"/all-messages"}
        className={({ isActive }) =>
          isActive ? "nav-item active-nav-item" : "nav-item"
        }
      >
        All Messages
      </NavLink>
      <NavLink
        to={"/drafts"}
        className={({ isActive }) =>
          isActive ? "nav-item active-nav-item" : "nav-item"
        }
      >
        Drafts
      </NavLink>
    </nav>
  );
}

export default Navigation;
