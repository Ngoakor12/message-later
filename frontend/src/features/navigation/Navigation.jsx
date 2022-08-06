import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to={"/today"}>Today</NavLink>
      <NavLink to={"/all-messages"}>All Messages</NavLink>
      <NavLink to={"/drafts"}>Drafts</NavLink>
    </nav>
  );
}

export default Navigation;
