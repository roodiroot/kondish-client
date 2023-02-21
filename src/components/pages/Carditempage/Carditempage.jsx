import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import CatalogBlock from "../Main/components/CatalogBlock";
import { fetchProduct } from "../../../store/reducers/ActionCreators";
import { bascetSlice } from "../../../store/reducers/BascetSlice";
import BackBatton from "../../BackBatton/BackBatton";
import Button from "../../Button/Button";
import Counter from "../../Counter/Counter";
import PhotoSlider from "../../PhotoSlider/PhotoSlider";
import SocialBlock from "../../SocialBlock/SocialBlock";
import UpdateRow from "./UpdateRow";
import CheckIcon from "../../CheckIcon/CheckIcon";
import { updateProductAPI } from "../../../http/productAPI";
import Loader from "../../Loader/Loader";
import DescriptRow from "./DescriptRow";

import "./style.scss";

function Carditempage() {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const { oneProduct, isLoading } = useSelector(
    (state) => state.productReducer
  );
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [hitValue, setHitValue] = useState(false);
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  if (count < 1) return setCount(1);
  if (count > 5) return setCount(5);

  const addProductInBascet = () => {
    dispatch(
      bascetSlice.actions.addProduct({
        name: oneProduct.name,
        propertys: oneProduct,
        count,
        summ: oneProduct.price * count,
      })
    );
  };
  const updadeMasterTrue = () => {
    if (user?.role === "ADMIN") {
      return true;
    }
    return false;
  };
  const setHitValueFunc = () => {
    setHitValue(!hitValue);
    updateProductAPI(oneProduct.id, { hit: !hitValue });
  };

  return (
    <>
      <div className="cardItem">
        <BackBatton sub="Вернуться к выбору товара" />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="cardItem__mainRow mainRowCardItem">
              <PhotoSlider imgArray={oneProduct.img_array} />
              <div className="mainRowCardItem__billingBlock">
                <div className="mainRowCardItem__headerBlock">
                  <div className="mainRowCardItem__title">
                    {oneProduct?.name}
                  </div>
                  <div className="mainRowCardItem__subTitle">
                    {oneProduct?.description}
                  </div>
                </div>
                <div className="mainRowCardItem__tableCardItem tableCardItem">
                  <div className="tableCardItem__title">описание</div>
                  <div className="tableCardItem__topBLock borderLine">
                    <div className="tableCardItem__row">
                      <div className="tableCardItem__key">Принцип работы:</div>
                      <div className="tableCardItem__meaning">
                        обогрев/охлаждение
                      </div>
                    </div>
                    <div className="tableCardItem__row">
                      <div className="tableCardItem__key">Артикул:</div>
                      <div className="tableCardItem__meaning">
                        {oneProduct?.vendor_code}
                      </div>
                    </div>
                  </div>
                  <div className="tableCardItem__priceAndCountBlock">
                    <div className="tableCardItem__row">
                      <div className="tableCardItem__key">Цена:</div>
                      <UpdateRow
                        bool={updadeMasterTrue()}
                        value={oneProduct?.price}
                        name="price"
                        id={oneProduct.id}
                      >
                        <div className="tableCardItem__meaning">
                          <span className="tableCardItem__newPrice">
                            ₽ {oneProduct?.price}
                          </span>
                          <span className="tableCardItem__slash"> / </span>
                          <span className="tableCardItem__oldPrice">
                            ₽ {oneProduct?.price * 0.1 + oneProduct?.price}
                          </span>
                        </div>
                      </UpdateRow>
                    </div>
                    <div className="tableCardItem__row">
                      <div className="tableCardItem__key">Колличество:</div>
                      <div className="tableCardItem__meaning">
                        <Counter count={count} setCount={setCount} />
                      </div>
                    </div>
                  </div>
                  <div className="tableCardItem__connectBlock">
                    <div className="tableCardItem__socialBlock socialBlockFooter">
                      <SocialBlock type="FOOTER" tg ws />
                    </div>
                    <div className="tableCardItem__button">
                      <Button type="sm" onClick={addProductInBascet}>
                        Добавить в корзину
                      </Button>
                    </div>
                  </div>
                  <div className="tableCardItem__toBascet">
                    <span>
                      <Link to="/basket-page">Перейти в корзину</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardItem__description descriptionCardItem">
              <div className="descriptionCardItem__leftBlock">
                <div className="descriptionCardItem__tableCardItem tableCardItem">
                  <div className="tableCardItem__title">описание</div>
                  <div className="tableCardItem__topBLock">
                    {oneProduct?.pipe_length_max && (
                      <DescriptRow
                        name="Макс. длина трубы:"
                        value={oneProduct?.pipe_length_max}
                        si="м."
                      />
                    )}
                    {oneProduct?.noise && (
                      <DescriptRow
                        name="Уровень шума:"
                        value={oneProduct?.noise}
                        si="дб."
                      />
                    )}
                    {oneProduct?.heating_power && (
                      <DescriptRow
                        name="Мощность обогрева:"
                        value={oneProduct?.heating_power}
                        si="кВт."
                      />
                    )}
                    {oneProduct?.cooling_power && (
                      <DescriptRow
                        name="Мощность охлаждения:"
                        value={oneProduct?.cooling_power}
                        si="кВт."
                      />
                    )}
                    {oneProduct?.noise && (
                      <DescriptRow
                        name="Уровень шума:"
                        value={oneProduct?.noise}
                        si="дб."
                      />
                    )}
                    {oneProduct?.WiFi && (
                      <DescriptRow
                        name="Наличие wifi:"
                        value={oneProduct?.WiFi}
                      />
                    )}
                    {oneProduct?.noise && (
                      <DescriptRow name="Гарантия:" value={`3`} si="года" />
                    )}
                  </div>
                </div>
              </div>
              <div className="descriptionCardItem__rightBlock">
                <div className="descriptionCardItem__tableCardItem tableCardItem">
                  <div className="tableCardItem__title">описание</div>
                  <div className="tableCardItem__topBLock">
                    {oneProduct?.brand && (
                      <DescriptRow name="Бренд:" value={oneProduct?.brand} />
                    )}
                    {oneProduct?.manufacture_country && (
                      <DescriptRow
                        name="Производитель:"
                        value={oneProduct?.manufacture_country}
                      />
                    )}
                    {oneProduct?.brand_country && (
                      <DescriptRow
                        name="Страна бренда:"
                        value={oneProduct?.brand_country}
                      />
                    )}
                    {oneProduct?.S && (
                      <DescriptRow
                        name="Площадь помещения:"
                        value={`до ${oneProduct?.S}`}
                        si="м²."
                      />
                    )}
                    {oneProduct?.energy_class && (
                      <DescriptRow
                        name="Класс энегроэффективности:"
                        value={`${oneProduct?.energy_class}`}
                      />
                    )}
                    {oneProduct?.compressor && (
                      <DescriptRow
                        name="Тип компрессора:"
                        value={oneProduct?.compressor}
                      />
                    )}
                    {updadeMasterTrue() && (
                      <div className="hitupdate">
                        <CheckIcon value={hitValue} setValue={setHitValueFunc}>
                          HIT
                        </CheckIcon>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {!updadeMasterTrue() && <CatalogBlock title="Так же смотрят" />}
    </>
  );
}

export default Carditempage;
