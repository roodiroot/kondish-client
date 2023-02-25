import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { sendMessageAPI } from "../../../http/sendMessageAPI";
import { notificationSlice } from "../../../store/reducers/NotificationSlice";

import BackBatton from "../../BackBatton/BackBatton";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import ModalBody from "../../Modal/ModalBody";
import "./style.scss";

function Servicepage() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [personal, setPersonal] = useState(false);

  const inputArray = [
    { name: "Имя*", func: [name, setName] },
    { name: "Номер телефона*", func: [number, setNumber] },
  ];
  const sendMessage = () => {
    if (name === "" || name.length < 3 || name.length > 19)
      return alert("Введите корректоное Имя");
    if (number.length < 17 || number.length > 18)
      return alert("Введите корректоный номер телефона");
    if (personal === false)
      return alert(
        "Вы должны согласиться с политикой по обработке персональных данных"
      );
    const TOTAL = `Обратная связь с сайта Имя: ${name} Номер телефона: ${number} отправлено со страницы ${pathname}`;
    sendMessageAPI(TOTAL).then((d) => {
      dispatch(notificationSlice.actions.dindon("Ожидайте звонка..."));
    });
    setName("");
    setNumber("");
    setPersonal(false);
    setModal(false);
  };

  return (
    <>
      <div className="service">
        <BackBatton />
        <div className="service__blockHeader blockHeader">
          <div className="blockHeader__title">
            Стоимость услуг монтажа и установки
          </div>
        </div>
        <div className="service__body">
          <table className="service__table">
            <tbody>
              <tr className="service__rowHeader">
                <th className="service__header">Услуга</th>
                <th className="service__header">Модели</th>
                <th className="service__header">Стоимость работ</th>
              </tr>
              <tr className="service__row">
                <td className="service__section">Монтаж до 5м.</td>
                <td className="service__section">07-09</td>
                <td className="service__section">15 000 ₽</td>
              </tr>
              <tr className="service__row">
                <td className="service__section">Монтаж до 5м.</td>
                <td className="service__section">12</td>
                <td className="service__section">16 000 ₽</td>
              </tr>
              <tr className="service__row">
                <td className="service__section">Монтаж до 5м.</td>
                <td className="service__section">18</td>
                <td className="service__section">17 000 ₽</td>
              </tr>
              <tr className="service__row">
                <td className="service__section">Монтаж до 5м.</td>
                <td className="service__section">24</td>
                <td className="service__section">20 000 ₽</td>
              </tr>
            </tbody>
          </table>
          <table className="service__table twoColumn">
            <tbody>
              <tr className="service__rowHeader">
                <th className="service__header">Услуга</th>
                <th className="service__header">Стоимость работ</th>
              </tr>
              <tr className="service__row">
                <td className="service__section">Штробление бетона</td>
                <td className="service__section">2 500 ₽ пог. метр</td>
              </tr>
              <tr className="service__row">
                <td className="service__section">Штробление кирпич-пеноблок</td>
                <td className="service__section">1 000 ₽ пог. метр</td>
              </tr>
              <tr className="service__row">
                <td className="service__section">
                  Дополнительная трасса после 5 метров
                </td>
                <td className="service__section">1 200 ₽ погонный метр</td>
              </tr>
              <tr className="service__row">
                <td className="service__section">Услуги альпиниста</td>
                <td className="service__section">7 000 ₽ за 1 кондиционер</td>
              </tr>
              <tr className="service__row">
                <td className="service__section">Работа с лестницы до 4 м</td>
                <td className="service__section">2 000 ₽</td>
              </tr>
              <tr className="service__row">
                <td className="service__section">Работа с лестницы до 5 м</td>
                <td className="service__section">3 000 ₽</td>
              </tr>
              <tr className="service__row">
                <td className="service__section">Работа с лестницы до 6 м</td>
                <td className="service__section">4 000 ₽</td>
              </tr>
              <tr className="service__row">
                <td className="service__section">Работа с лестницы до 10 м</td>
                <td className="service__section">6 000 ₽</td>
              </tr>
              <tr className="service__row">
                <td className="service__section">
                  Услуга автовышки и монтаж на вентилируемый фасад
                </td>
                <td className="service__section">Договорная</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="service__button">
          <Button onClick={(e) => setModal(true)}>Заказать услугу</Button>
        </div>
      </div>
      <div className="working">
        <div className="working__blockHeader blockHeader">
          <div className="blockHeader__title">Этапы рабочего процесса</div>
        </div>
        <div className="working__topLine">
          <div className="working__block">
            <div className="working__blockTitle">Этап 1</div>
            <div className="working__text">Выезд монтажной бригады</div>
            <div className="working__text">
              доставка оборудования и инструментов
            </div>
            <div className="working__text">
              бурение отверстия для проводки коммуникаций
            </div>
            <div className="working__text">
              обмотка коммуникаций тефлоновой лентой
            </div>
            <div className="working__text">прокладывание коммуникаций</div>
            <div className="working__text">
              монтаж кронштейнов для наружного блока
            </div>
            <div className="working__text">установка наружного блока</div>
            <div className="working__text">сбор и вывоз мусора</div>
            <div className="working__text">
              заполнение сопутствующих документов и актов
            </div>
          </div>
          <div className="working__block">
            <div className="working__blockTitle">Этап 2</div>
            <div className="working__text">производится развальцовка труб</div>
            <div className="working__text">
              монтаж кронштейнов для внутреннего блока
            </div>
            <div className="working__text">установка внутреннего блока</div>
            <div className="working__text">пусконаладочные работы</div>
            <div className="working__text">вакуумирование коммуникаций</div>
            <div className="working__text">запуск фреона в систему</div>
            <div className="working__text">
              подключение, запуск и проверка оборудования
            </div>
            <div className="working__text">
              заполнение сопутствующих документов и актов
            </div>
          </div>
        </div>
        <div className="working__bottomLIne">
          <div className="working__blockHeader blockHeader">
            <div className="blockHeader__title">
              Преимущества установки в два этапа:
            </div>
          </div>
          <div className="working__block2">
            <div className="working__descriptionRow">
              <div className="workingIcon icon-000000"></div>
              <div className="working__description">
                Отсутствие лишних кабелей и коммуникаций в помещении
              </div>
            </div>
            <div className="working__descriptionRow">
              <div className="workingIcon icon-000000"></div>
              <div className="working__description">
                Возможность установки климатической системы практически в любом
                месте
              </div>
            </div>
            <div className="working__descriptionRow">
              <div className="workingIcon icon-000000"></div>
              <div className="working__description">
                Возможность установки внешнего блока в удобном для доступа месте
              </div>
            </div>
            <div className="working__descriptionRow">
              <div className="workingIcon icon-000000"></div>
              <div className="working__description">
                Риск загрязнения интерьера и повреждения ремонта минимален
              </div>
            </div>
            <div className="working__descriptionRow">
              <div className="workingIcon icon-000000"></div>
              <div className="working__description">
                Возможность вывода дренажа в нужное место
              </div>
            </div>
          </div>
          <div className="service__button">
            <Button onClick={(e) => setModal(true)}>Заказать услугу</Button>
          </div>
        </div>
      </div>
      <Modal active={modal} setactive={setModal}>
        <ModalBody
          h2
          setCheckValue={setPersonal}
          checkValue={personal}
          input={inputArray}
          onClick={sendMessage}
        />
      </Modal>
    </>
  );
}

export default Servicepage;
