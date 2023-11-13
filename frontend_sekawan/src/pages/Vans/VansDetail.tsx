import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

function VansDetail() {
  let { id } = useParams();

  const [currentVan, setCurrentVan]: any = useState(null);
  const location = useLocation();
  console.log(location);
  console.log(location.state.search);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data));
  }, [id]);

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
        {currentVan && (
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
        )}
      </>
    </div>
  );
}

export default VansDetail;
