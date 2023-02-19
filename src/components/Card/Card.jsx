import "./style.scss";
import { Link } from "react-router-dom";
import Picture from "../Picture/Picture";

function Card({ element }) {
  let price;
  price =
    `${element?.price}`.slice(0, -3) + " " + `${element?.price}`.slice(-4, -1);

  return (
    <div className="cardItemShop">
      <Link to={`/card-item-page/${element?.vendor_code}`}>
        <div className="cardItemShop__header">
          <table>
            <tbody>
              <tr className="cardItemShop__topLine">
                <td className="cardItemShop__pl">до {element?.S} м²</td>
                <td className="cardItemShop__nameBrand">{element?.brand}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cardItemShop__photo">
          {element.external ? (
            <Picture folder="png" img={element?.img} external />
          ) : (
            <Picture folder="png" img={element?.img} />
          )}
        </div>
        <div className="cardItemShop__footer">
          <div className="cardItemShop__name">{element?.name}</div>
          <div className="cardItemShop__block">
            <table>
              <tbody>
                <tr className="cardItemShop__descriptionRow">
                  <td className="cardItemShop__key">Класс:</td>
                  <td className="cardItemShop__mean">
                    {element?.energy_class}
                  </td>
                </tr>
                <tr className="cardItemShop__descriptionRow">
                  <td className="cardItemShop__key">Шум:</td>
                  <td className="cardItemShop__mean">{element?.noise} дБ.</td>
                </tr>
                <tr className="cardItemShop__descriptionRow">
                  <td className="cardItemShop__key">Цена:</td>
                  <td className="cardItemShop__mean price">
                    <span>{price} ₽</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
