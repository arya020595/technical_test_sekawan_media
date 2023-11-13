import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const { currentVan }: any = useOutletContext();
  const listItems = currentVan.images.map((image: any, index: any) => (
    <div key={index}>
      <img src={image} />
    </div>
  ));
  return (
    <>
      {currentVan && (
        <section>
          <h2>Thumbnail:</h2>
          <div>
            <img src={currentVan.thumbnail} />
          </div>

          <h2>List image:</h2>
          {listItems}
        </section>
      )}
    </>
  );
}

export default HostVanPhotos;
