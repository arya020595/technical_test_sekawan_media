import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = ({ isActive }: any) => {
    if (isActive) {
      return {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "red",
      };
    }
    // Return undefined when isActive is false
    return undefined;
  };

  return (
    <header>
      <nav>
        <NavLink to="/" style={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={activeStyle}>
          About
        </NavLink>
        <NavLink to="/host" style={activeStyle}>
          Host
        </NavLink>
        <NavLink to="/vans" style={activeStyle}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
