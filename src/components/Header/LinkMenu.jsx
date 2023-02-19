import { NavLink } from 'react-router-dom';

function LinkMenu({ link, children, className, setActiveMobilMenu }) {
  return (
    <li
      onClick={() => setActiveMobilMenu && setActiveMobilMenu(false)}
      className={className} >
      <NavLink to={link}>{children}</NavLink>
    </li>
  );
}

export default LinkMenu;
