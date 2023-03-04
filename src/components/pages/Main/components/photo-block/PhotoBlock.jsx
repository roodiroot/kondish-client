import { useNavigate } from "react-router-dom";

import {
  p1,
  p1w,
  p2w,
  p2,
  p3,
  p3w,
  p4,
  p4w,
  p5,
  p5w,
  p6,
  p6w,
  p7,
  p7w,
  p8,
  p8w,
} from "../../../../../staticImg";
import ImgWrapper from "./ImgWrapper/ImgWrapper";

import "./style.scss";

function PhotoBlock() {
  const navigate = useNavigate();
  return (
    <div className="photoBlock">
      <div className="photoBlock__blockHeader blockHeader">
        <div className="blockHeader__title">Наши работы.</div>
        <div className="blockHeader__subtitle">
          Вы можете посмотреть больше работ
          <span onClick={(e) => navigate("/gallery-page")}>в галерее</span>
        </div>
      </div>
      <div className="photoBlock__body">
        <div className="photoBlock__mcolumn">
          <div className="photoBlock__column">
            <ImgWrapper product="Royal Clima RCI-RF40HN" img={[p1, p1w]}>
              Чулково Club
            </ImgWrapper>
            <ImgWrapper product="Samsung AR12TXHQASINUA" img={[p6, p6w]}>
              Квартира в Новой Москве
            </ImgWrapper>
          </div>
          <div className="photoBlock__column">
            <ImgWrapper product="Royal Clima 2RGR-24HN/OUT" img={[p4, p4w]}>
              КП Довиль
            </ImgWrapper>
            <ImgWrapper product="Royal Clima RCI-PF40HN" img={[p5, p5w]}>
              Квартира в Зеленограде
            </ImgWrapper>
          </div>
        </div>
        <div className="photoBlock__mcolumn">
          <div className="photoBlock__column">
            <ImgWrapper product="HISENSE AS-12HR4SYDDJ3" img={[p2, p2w]}>
              КП Стольный
            </ImgWrapper>
            <ImgWrapper product="Samsung AR12TXHQASINUA" img={[p3, p3w]}>
              Квартира в Новой Москве
            </ImgWrapper>
          </div>
          <div className="photoBlock__column">
            <ImgWrapper product="AUX ASW-H07A4/JD-R1" img={[p7, p7w]}>
              ЖК ЗИЛАРТ
            </ImgWrapper>
            <ImgWrapper product="Energolux SAS09B3-A/SAU09B3-A" img={[p8, p8w]}>
              Красные пруды
            </ImgWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoBlock;
