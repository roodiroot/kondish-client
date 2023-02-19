import classNames from "classnames";

import { constantLinks } from "../../constanse";
import LinkMenu from "../Header/LinkMenu";

function MenuHeader({ activeMobilMenu, setActiveMobilMenu }) {
  return (
    <div className={classNames(activeMobilMenu && "active", "menuList")}>
      <ul className="menuList__list">
        {constantLinks.header.map((link) => (
          <LinkMenu
            setActiveMobilMenu={setActiveMobilMenu}
            key={link.id}
            link={link.link}
            className="menuList__link"
          >
            {link.name}
          </LinkMenu>
        ))}
      </ul>
    </div>
  );
}

export default MenuHeader;
