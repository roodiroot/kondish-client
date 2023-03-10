import classNames from "classnames";
import "./style.scss";

function Modal({ active, setactive, children, minWidth }) {
  if (active) {
    document.body.classList.add("--lock");
  } else {
    document.body.classList.remove("--lock");
  }
  return (
    <div
      className={classNames("modal", active && "active")}
      onClick={() => setactive(false)}
    >
      <div
        className={classNames("modal__content", active && "active")}
        onClick={(e) => e.stopPropagation()}
        style={{ minWidth: minWidth }}
      >
        <div onClick={() => setactive(false)} className="modal__burger"></div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
