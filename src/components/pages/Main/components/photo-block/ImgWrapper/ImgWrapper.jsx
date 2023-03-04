import SVGCombine from "../../../../../SVG/SVGCombine/SVGCombine";
import "./style.scss";

function ImgWrapper({ children, img, product }) {
  return (
    <div className="imgWrapper">
      <div className="imgWrapper__photo">
        <picture>
          <source srcSet={img[1]} type="image/webp" />
          <img src={img[0]} alt="фото проекта" />
        </picture>
        <div className="imgWrapper__sky">
          <div className="imgWrapper__textBlock">
            <div className="imgWrapper__starsBlock">
              <SVGCombine star />
              <SVGCombine star />
              <SVGCombine star />
              <SVGCombine star />
              <SVGCombine star />
            </div>
            <div className="imgWrapper__nameProduct">{product}</div>
          </div>
        </div>
      </div>
      <div className="imgWrapper__title">{children}</div>
    </div>
  );
}

export default ImgWrapper;
