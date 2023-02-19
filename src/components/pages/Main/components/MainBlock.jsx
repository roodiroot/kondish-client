import Button from "../../../Button/Button";
import SocialBlock from "../../../SocialBlock/SocialBlock";
import sl2 from "../../../../assets/img/nobg/main2.png";
import sl4 from "../../../../assets/img/nobg/main4.png";
import sl5 from "../../../../assets/img/nobg/main5.png";
import SVGCombine from "../../../SVG/SVGCombine/SVGCombine";

function MainBlock({ click }) {
  return (
    <div className="mainPage">
      <div className="mainPage__topRow">
        <div className="mainPage__descript">
          <div className="mainPage__title titlePres">
            <h1>Установка сплит-системы в Москве и Московской области</h1>
            <ul className="titlePres__list">
              <li className="titlePres__elem1 ">
                <div className="titlePres__body">
                  <div className="titlePres__photo">
                    <img src={sl5} alt="kon1"></img>
                  </div>
                  <div className="titlePres__iconBlock">
                    <SVGCombine kons />
                  </div>
                  <div className="titlePres__title">Консультация</div>
                  <div className="titlePres__subtitle">Бесплатно</div>
                </div>
              </li>
              <li className="titlePres__elem2">
                <div className="titlePres__body">
                  <div className="titlePres__photo">
                    <img src={sl4} alt="kon1"></img>
                  </div>
                  <div className="titlePres__iconBlock">
                    <SVGCombine zam />
                  </div>
                  <div className="titlePres__title">Замер</div>
                  <div className="titlePres__subtitle">Бесплатно</div>
                </div>
              </li>
              <li className="titlePres__elem3">
                <div className="titlePres__body">
                  <div className="titlePres__photo">
                    <img src={sl2} alt="kon1"></img>
                  </div>
                  <div className="titlePres__iconBlock">
                    <SVGCombine gar />
                  </div>
                  <div className="titlePres__title">Гарантия</div>
                  <div className="titlePres__subtitle">100%</div>
                </div>
              </li>
            </ul>
          </div>
          <ul className="mainPage__list">
            <li className="mainPage__desc">
              <h2>Монтаж систем с проектом.</h2>
            </li>
            <li className="mainPage__desc">
              <h2>Подбор сплит-систем.</h2>
            </li>
            <li className="mainPage__desc">
              <h2>Работа строго по проектной документации.</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="mainPage__bottomRow">
        <div className="mainPage__battonBlock">
          <Button onClick={click} type="bg">
            Установить кондиционер
          </Button>
          <Button to="shop-page" type="nbg">
            Магазин
          </Button>
        </div>
        <div className="mainPage__socialBlock">
          <SocialBlock type="MAIN" dz ws vk tg />
        </div>
      </div>
    </div>
  );
}

export default MainBlock;
