import SVGCombine from "../SVG/SVGCombine/SVGCombine";
import "./style.scss";

function PhoneBlock() {
  return (
    <div className="phoneBlock">
      <a href="tel:89153294209" className="phoneBlock__icon">
        <SVGCombine phone />
      </a>
      <div className="phoneBlock__textBlock">
        <div className="phoneBlock__title">Нужна консультация? Звоните!</div>
        <div className="phoneBlock__number">
          <a href="tel:89153294209">8 915 329-42-09</a>
        </div>
      </div>
    </div>
  );
}

export default PhoneBlock;
