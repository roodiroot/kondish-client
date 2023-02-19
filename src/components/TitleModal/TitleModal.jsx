import classNames from "classnames";

import "./style.scss";

function TitleModal({ children, style, h1, h2, h3 }) {
  return (
    <div
      style={style}
      className={classNames(
        "modal__header",
        h1 && "h1",
        h2 && "h2",
        h3 && "h3"
      )}
    >
      {children}
    </div>
  );
}

export default TitleModal;
