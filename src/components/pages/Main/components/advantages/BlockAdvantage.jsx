import classNames from "classnames";
import SVGCombine from "../../../../SVG/SVGCombine/SVGCombine";
import "./style.scss";

function BlockAdvantage({ children, header, icon }) {
  return (
    <div className="advantage__block blockAdvantage">
      <div className="blockAdvantage__headerRow">
        <div className="blockAdvantage__header">{header}</div>
        <div className="blockAdvantage__icon">
          <SVGCombine
            salies={icon === "salies"}
            sistem={icon === "sistem"}
            lamp={icon === "lamp"}
          />
          <SVGCombine
            saliesL={icon === "salies"}
            sistemL={icon === "sistem"}
            lampL={icon === "lamp"}
          />
        </div>
      </div>
      <div className="blockAdvantage__body">
        <p className="blockAdvantage__text">{children}</p>
      </div>
      <div
        className={classNames("blockAdvantage__color", {
          fiolet: icon === "lamp",
          greencolor: icon === "sistem",
          pinkeycolor: icon === "salies",
        })}
      ></div>
    </div>
  );
}

export default BlockAdvantage;
