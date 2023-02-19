import "./style.scss";

function SWGWrapper({ children, onClick }) {
  return (
    <div onClick={(e) => onClick()} className="header__cart cartIcon">
      {children}
    </div>
  );
}

export default SWGWrapper;
