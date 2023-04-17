import { NavLink, useLocation } from "react-router-dom";
function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className={`${pathname === `/` ? "hide-component" : ""}`}>
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
