import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
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
    <div>
      <nav>
        <NavLink style={activeStyle} to="." end>
          Dashboard
        </NavLink>
        <NavLink style={activeStyle} to="income">
          Income
        </NavLink>
        <NavLink style={activeStyle} to="vans">
          Vans
        </NavLink>
        <NavLink style={activeStyle} to="reviews">
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default HostLayout;
