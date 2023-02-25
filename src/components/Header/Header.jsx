import { useState } from "react";

import Burger from "../Burger/Burger";
import Button from "../Button/Button";
import IconBascet from "../utils.components/IconBascet/IconBascet";
import Logo from "../utils.components/Logo";
import "./style.scss";

import MenuHeader from "../MenuHeader/MenuHeader";
import SVGCombine from "../SVG/SVGCombine/SVGCombine";
import { useDispatch } from "react-redux";
import SWGWrapper from "../utils.components/SWGWrapper/SWGWrapper";
import { userSlice } from "../../store/reducers/UserSlice";

function Header({ click, userReducer, bascetReducer }) {
  const dispatch = useDispatch();
  const [activeMobilMenu, setActiveMobilMenu] = useState(false);

  const logOut = () => {
    dispatch(userSlice.actions.logOutUser());
    localStorage.removeItem("token");
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__rightBlock">
          <MenuHeader
            setActiveMobilMenu={setActiveMobilMenu}
            activeMobilMenu={activeMobilMenu}
          />
          <div className="header__navigate navigatePanel">
            <a href="tel:89153294209" className="navigatePanel__number">8 915 329-42-09</a>
            <Button style={{ zIndex: "1" }} onClick={click} type="sm">
              Обратная связь
            </Button>
          </div>
          <IconBascet count={bascetReducer?.count} to="/basket-page">
            <SVGCombine cart />
          </IconBascet>
          {userReducer?.isAuth && (
            <SWGWrapper onClick={logOut}>
              <SVGCombine logout />
            </SWGWrapper>
          )}
          <Burger
            activeMobilMenu={activeMobilMenu}
            setActiveMobilMenu={setActiveMobilMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
