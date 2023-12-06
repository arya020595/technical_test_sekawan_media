import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getHostVans } from "../../api";
import requireAuth from "../../utils";

export async function loader() {
  await requireAuth();
  return getHostVans();
}

function HostVans() {
  // Assuming datas is of type Data
  const datas: any = useLoaderData();
  const [searchParams, setSearchParams]: any = useSearchParams();
  const categoryFilter = searchParams.get("category");
  console.log(categoryFilter);

  const displayedVans = categoryFilter
    ? datas?.products.filter((data: any) => data.category === categoryFilter)
    : datas?.products;

  console.log(datas);

  return (
    <>
      <h1>List Host Van</h1>

      <div>
        <button
          type="button"
          onClick={() => setSearchParams({ category: "smartphones" })}>
          Smartphones
        </button>
        <button
          type="button"
          onClick={() => setSearchParams({ category: "groceries" })}>
          Groceries
        </button>
        <button
          type="button"
          onClick={() => setSearchParams({ category: "laptops" })}>
          Laptops
        </button>
        <button type="button" onClick={() => setSearchParams({})}>
          Clear Filter
        </button>
      </div>

      {displayedVans &&
        displayedVans.map((data: any, index: number) => (
          <div key={index}>
            <Link to={`./${data.id}`}>{data.title}</Link>
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

export default HostVans;
