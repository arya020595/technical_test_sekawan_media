import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const { currentVan }: any = useOutletContext();

  return (
    <>
      {currentVan && (
        <section>
          <h2>
            Title: <span>{currentVan.title}</span>
          </h2>
          <h2>
            Brand:<span>{currentVan.brand}</span>
          </h2>
          <h2>Category: {currentVan.category}</h2>
          <h2>Description: {currentVan.description}</h2>
        </section>
      )}
    </>
  );
}

export default HostVanInfo;
