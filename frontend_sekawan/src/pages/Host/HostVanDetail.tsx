import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

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

  let { id } = useParams();

  const [currentVan, setCurrentVan]: any = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data));
  }, [id]);

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
