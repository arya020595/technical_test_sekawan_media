import { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

function Vans() {
  const datas: any = useLoaderData();
  console.log("asdasdasd", datas);

  // Assuming datas is of type Data
  const [searchParams, setSearchParams]: any = useSearchParams();
  const [error, setError] = useState<string>("");
  const categoryFilter = searchParams.get("category");
  console.log(categoryFilter);

  const displayedVans = categoryFilter
    ? datas?.products.filter((data: any) => data.category === categoryFilter)
    : datas?.products;

  console.log(datas);

  type SearchParamsType = {
    [key: string]: string;
  };

  const handleFilterChange = (key: string, value: string) => {
    // https://stackoverflow.com/questions/55247378/spread-operator-in-react-setstate
    if (value === "") return setSearchParams({});

    setSearchParams((prevParams: SearchParamsType) => ({
      ...prevParams,
      [key]: value,
    }));
  };

  return (
    <>
      <h1>List Vans</h1>

      <div>
        <button
          type="button"
          className={`van-category smartphones ${
            categoryFilter == "smartphones" && "selected"
          }`}
          onClick={() => handleFilterChange("category", "smartphones")}>
          Smartphones
        </button>
        <button
          type="button"
          className={`van-category groceries ${
            categoryFilter == "groceries" && "selected"
          }`}
          onClick={() => handleFilterChange("category", "groceries")}>
          Groceries
        </button>
        <button
          type="button"
          className={`van-category laptops ${
            categoryFilter == "laptops" && "selected"
          }`}
          onClick={() => handleFilterChange("category", "laptops")}>
          Laptops
        </button>
        {categoryFilter && (
          <button type="button" onClick={() => handleFilterChange("", "")}>
            Clear Filter
          </button>
        )}
      </div>

      {displayedVans &&
        displayedVans.map((data: any, index: number) => (
          <div key={index}>
            <Link
              to={`./${data.id}`}
              state={{ search: searchParams.toString(), type: categoryFilter }}>
              {data.title}
            </Link>
          </div>
        ))}
    </>
  );
}

{
  /* <div>
  <Link to="?category=smartphones">
    <button type="button">Smartphones</button>
  </Link>
  <Link to="?category=groceries">
    <button type="button">Groceries</button>
  </Link>
  <Link to="?category=laptops">
    <button type="button">Laptops</button>
  </Link>
  <Link to=".">
    <button type="button">Clear Filter</button>
  </Link>
</div> */
}

export default Vans;
