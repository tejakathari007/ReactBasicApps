import ImageShow from "./ImageShow";
import "./image-List.css";

function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-List">{renderImages}</div>;
}

export default ImageList;
