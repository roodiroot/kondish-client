import Picture from "../Picture/Picture";
import "./style.scss";

function GalleryCard({ info }) {
  const date = info?.date?.slice(0, 10).split("-").join(".");
  return (
    <div className="galery__element elementGalery">
      <div className="elementGalery__image">
        <Picture folder="gallery" img={info.img} />
      </div>
      <div className="elementGalery__date">{date}</div>
      <div className="elementGalery__description">{info.description}</div>
    </div>
  );
}

export default GalleryCard;
