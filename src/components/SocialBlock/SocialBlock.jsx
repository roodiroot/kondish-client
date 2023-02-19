import classNames from "classnames";
import { Link } from "react-router-dom";
import "./style.scss";

function SocialBlock({ type, dz, ws, vk, tg }) {
  return (
    <div
      className={classNames(
        type === "FOOTER" && "socialBlockFooter",
        type === "MAIN" && "socialBlockMain"
      )}
    >
      <ul
        className={classNames(
          type === "FOOTER" && "socialBlockFooter__list",
          type === "MAIN" && "socialBlockMain__list"
        )}
      >
        {dz && (
          <a target="blank" href={process.env.REACT_APP_DZEN}>
            <li
              className={classNames(
                type === "FOOTER" && "socialBlockFooter__link",
                type === "MAIN" && "socialBlockMain__link",
                "icon-dzen dz"
              )}
            ></li>
          </a>
        )}
        {ws && (
          <a target="blank" href={process.env.REACT_APP_WHATSAPP}>
            <li
              className={classNames(
                type === "FOOTER" && "socialBlockFooter__link",
                type === "MAIN" && "socialBlockMain__link",
                "icon-ws ws"
              )}
            ></li>
          </a>
        )}
        {vk && (
          <a target="blank" href={process.env.REACT_APP_VK}>
            <li
              className={classNames(
                type === "FOOTER" && "socialBlockFooter__link",
                type === "MAIN" && "socialBlockMain__link",
                "icon-vk vk"
              )}
            ></li>
          </a>
        )}
        {tg && (
          <a target="blank" href={process.env.REACT_APP_TG}>
            <li
              className={classNames(
                type === "FOOTER" && "socialBlockFooter__link",
                type === "MAIN" && "socialBlockMain__link",
                "icon-tg tg"
              )}
            ></li>
          </a>
        )}
      </ul>
    </div>
  );
}

export default SocialBlock;
