import { Link } from "react-router-dom";
import { constantLinks } from "../../constanse";
import SocialBlock from "../SocialBlock/SocialBlock";
import FooterMenuList from "./FooterMenuList/FooterMenuList";
import FooterMenuSubList from "./FooterMenuSubList/FooterMenuSubList";
import "./style.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__rowTop">
          <div className="footer__leftBlock">
            <h3 className="footer__header">
              Установка сплит-систем в Москве и Московской области
            </h3>
            <FooterMenuList links={constantLinks} />
          </div>
          <FooterMenuSubList links={constantLinks} />
        </div>
        <div className="footer__rowBottom">
          <div className="footer__textBlock">
            <div className="footer__copy">© KONDISH, 2022</div>
            <div className="footer__politic">
              <Link to={process.env.REACT_APP_POLITIC} target="_blank">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
          <div className="footer__socialBlock">
            <SocialBlock type="FOOTER" dz ws vk tg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
