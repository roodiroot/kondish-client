import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Picture from "../Picture/Picture";
import "./style.scss";

function SkyCard({ element }) {
  return (
    <Link to={`/card-item-page/${element?.vendor_code}`}>
      <div className="catalog__element cardSky">
        <div className="cardSky__body">
          {element.hit && (
            <div className="cardSky__hit">
              <span>hit</span>
            </div>
          )}
          <div className="cardSky__photo">
            {element.external ? (
              <Picture folder="png" img={element?.img} external />
            ) : (
              <Picture folder="png" img={element?.img} />
            )}
          </div>
        </div>
        <div className="cardSky__descriptionBlock">
          <div className="cardSky__title">{element?.name}</div>
          <div className="cardSky__table tableDescription">
            <div className="tableDescription__row">
              <div className="tableDescription__key">Шум:</div>
              <div className="tableDescription__meaning">
                {element?.noise} дБ
              </div>
            </div>
            <div className="tableDescription__row">
              <div className="tableDescription__key">Площадь:</div>
              <div className="tableDescription__meaning">
                до {element?.S} м²
              </div>
            </div>
          </div>
          {/* <div className="cardSky__billing">
                        <div className="cardSky__price">Цена:</div>
                        <div className="cardSky__price">₽ {element?.price}</div>
                    </div> */}
          <Button to={`/card-item-page/${element?.vendor_code}`} type="sm">
            Посмотреть
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default SkyCard;
