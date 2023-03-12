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
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import useWindowScroll from "../../models/useWindowScroll";

function Header({ click, userReducer, bascetReducer }) {
  const scroll = useWindowScroll();

  const dispatch = useDispatch();
  const [activeMobilMenu, setActiveMobilMenu] = useState(false);

  const logOut = () => {
    dispatch(userSlice.actions.logOutUser());
    localStorage.removeItem("token");
  };

  return (
    <div
      className={classNames("header", {
        minHeader: scroll === "down",
      })}
    >
      <div className="header__bg"></div>
      <div className="header__container">
        <div className="header__topRow">
          <div className="header__favorites">
            <SVGCombine favorites />
            <span>работаем в Москве и Московской области</span>
          </div>
          <div className="header__socials">
            <a target="blank" href={process.env.REACT_APP_WHATSAPP}>
              <SVGCombine whatsapp />
            </a>
            <a target="blank" href={process.env.REACT_APP_TG}>
              <SVGCombine telegram />
            </a>
            <a target="blank" href={process.env.REACT_APP_VK}>
              <SVGCombine vk />
            </a>
          </div>
        </div>
        <div className="header__mainRow">
          <div className="header__logo">
            <Logo variant />
          </div>
          <div className="header__mainInfoBlock">
            <div className="header__infoButton phone">
              <IconBascet tel="tel:89153294209">
                <SVGCombine phone />
              </IconBascet>
              <div className="header__textBlockInfoButton">
                <div className="header__textRow">
                  <a href="tel:89153294209">8 9 15 329-42-09</a>
                </div>
                <div className="header__textRow">отвечаем с 8:00 до 22:00</div>
              </div>
            </div>
            <div className="header__infoButton">
              <IconBascet count={bascetReducer?.count} to="/basket-page">
                <SVGCombine cart />
              </IconBascet>
              <div className="header__textBlockInfoButton">
                <div className="header__textRow">
                  <Link to="/basket-page">
                    товаров в корзине <span>{bascetReducer?.count}</span>
                  </Link>
                </div>
                <div className="header__textRow">оформление заказа 24/7</div>
              </div>
            </div>
            {userReducer?.isAuth && (
              <SWGWrapper onClick={logOut}>
                <SVGCombine logout />
              </SWGWrapper>
            )}
            <div className="header__buttonBlock">
              <Button style={{ zIndex: "1" }} onClick={click} type="sm">
                Обратная связь
              </Button>
            </div>
          </div>
        </div>
        <div className="header__bottomRow">
          <div className="header__billy">
            <NavLink to="/billing-page">Оплата</NavLink>
          </div>
          <MenuHeader
            setActiveMobilMenu={setActiveMobilMenu}
            activeMobilMenu={activeMobilMenu}
          />
          <div className="header__work">режим работы с 8:00 до 22:00</div>
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
