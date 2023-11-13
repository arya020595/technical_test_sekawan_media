import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const { currentVan }: any = useOutletContext();
  return (
    <>
      {currentVan && (
        <section>
          <h2>
            Price: <span>{currentVan.price}</span>
          </h2>
          <h2>Discount Percentage: {currentVan.discountPercentage}</h2>
          <h2>
            Rating:<span>{currentVan.rating}</span>
          </h2>
          <h2>Stock: {currentVan.stock}</h2>
        </section>
      )}
    </>
  );
}

export default HostVanPricing;
