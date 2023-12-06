import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";

export function loader({ params }: any) {
  console.log(params);

  return getHostVans(params.id);
}

function HostVanDetail() {
  const activeStyle = ({ isActive }: any) => {
    if (isActive) {
      return {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "black",
      };
    }
    // Return undefined when isActive is false
    return undefined;
  };

  const currentVan: any = useLoaderData();

  return (
    <div>
      {/* Since HostVans is not a parent of HostVanDetail we need to go up one level
      in the path, instead of one level in the Route hierarchy */}
      <NavLink to=".." relative="path">
        Back to all vans
      </NavLink>
      <div>HostVanDetail</div>
      <nav>
        <NavLink to="." end style={activeStyle}>
          Details
        </NavLink>
        <NavLink to="pricing" style={activeStyle}>
          Pricing
        </NavLink>
        <NavLink to="photos" style={activeStyle}>
          Photos
        </NavLink>
      </nav>
      <Outlet context={{ currentVan }} />
    </div>
  );
}

export default HostVanDetail;
