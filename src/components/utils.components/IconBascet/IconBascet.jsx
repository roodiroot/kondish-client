import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./style.scss";

function IconBascet({ children, to, count }) {
  count = count || null;
  return (
    <Link to={to} className="header__cart cartIcon">
      {children}
      {count >= 1 && (
        <>
          <div className="cartIcon__count">
            <span>{count}</span>
          </div>
        </>
      )}
    </Link>
  );
}

export default IconBascet;
