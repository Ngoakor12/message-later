import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../App";

function Navigation({ setAuthedUser, handleClickLogout }) {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  // async function handleClickLogout() {
  //   console.log("Logging out");

  //   const result = await logout();
  //   if (result.success) {
  //     console.log(result);
  //     localStorage.setItem("user", null);
  //     setAuthedUser(null);
  //     navigate("/login");
  //   } else {
  //     console.log(result);
  //     console.log("Error logging out");
  //     navigate("/today");
  //   }
  // }

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
