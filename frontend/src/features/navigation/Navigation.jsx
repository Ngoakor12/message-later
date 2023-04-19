import { NavLink, useLocation } from "react-router-dom";

function logout() {}

function Navigation() {
  const { pathname } = useLocation();

  function handleClickLogout() {
    console.log("Logging out");
  }

  return (
    <nav
      className={`${
        pathname === `/` || pathname === `/login` ? "hide-component" : ""
      }`}
    >
      <div className="nav-left">
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
      </div>
      <div className="nav-right">
        <button onClick={handleClickLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
