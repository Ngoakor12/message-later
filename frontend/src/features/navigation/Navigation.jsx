import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  // const [hovered, setHovered] = useState(false);

  // function addHoveredClass(e) {
  //   const el = e.target;
  //   el.classList.add("hovered");
  // }

  // function removeHoveredClass(e) {
  //   const el = e.target;
  //   el.classList.remove("hovered");
  // }

  // function hover(e) {
  //   addHoveredClass(e);
  //   setHovered(true);
  // }

  // function unhover(e) {
  //   removeHoveredClass(e);
  //   setHovered(false);
  // }

  return (
    <nav>
      <NavLink
        to={"/today"}
        className={({ isActive }) =>
          isActive ? "nav-item active-nav-item" : "nav-item"
        }
        // onMouseEnter={hover}
        // onMouseLeave={unhover}
      >
        Today
      </NavLink>
      <NavLink
        to={"/all-messages"}
        className={({ isActive }) =>
          isActive ? "nav-item active-nav-item" : "nav-item"
        }
        // onMouseEnter={hover}
        // onMouseLeave={unhover}
      >
        All Messages
      </NavLink>
      <NavLink
        to={"/drafts"}
        className={({ isActive }) =>
          isActive ? "nav-item active-nav-item" : "nav-item"
        }
        // onMouseEnter={hover}
        // onMouseLeave={unhover}
      >
        Drafts
      </NavLink>
    </nav>
  );
}

export default Navigation;
