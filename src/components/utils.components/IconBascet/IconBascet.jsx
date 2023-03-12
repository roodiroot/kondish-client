import { Link } from "react-router-dom";

import "./style.scss";

function IconBascet({ children, to, count, tel }) {
  count = count || null;
  if (tel) {
    return (
      <a href={tel} className="header__cart cartIcon">
        {children}
      </a>
    );
  }
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
