import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import { getVans } from "../../api";

export function loader({ params }: any) {
  return getVans(params.id);
}

function VanDetail() {
  const currentVan: any = useLoaderData();

  const location = useLocation();
  console.log(location);
  console.log(location.state.search);

  const type = location.state?.type || "all";

  return (
    <div>
      <h1>VansDetail</h1>

      <>
        <NavLink to={`..?${location.state.search}`} relative="path">
          Back to {type} vans
        </NavLink>
      </>

      <>
        <section>
          <h2>
            Title: <span>{currentVan.title}</span>
          </h2>
          <h2>
            Brand:<span>{currentVan.brand}</span>
          </h2>
          <h2>
            Category: <span>{currentVan.category}</span>
          </h2>
          <h2>
            Description: <span>{currentVan.description}</span>
          </h2>
        </section>
      </>
    </div>
  );
}

export default VanDetail;
