import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessageAPI } from "../../../http/sendMessageAPI";
import { notificationSlice } from "../../../store/reducers/NotificationSlice";
import BackBatton from "../../BackBatton/BackBatton";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import ModalBody from "../../Modal/ModalBody";
import "./style.scss";

function Deliverypage() {
  const dispatch = useDispatch();
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
    const TOTAL = `Обратная связь с сайта Имя: ${name} Номер телефона: ${number} отправлено со страницы доставки`;
    sendMessageAPI(TOTAL).then((d) => {
      dispatch(notificationSlice.actions.dindon("Ожидайте звонка..."));
    });
    setName("");
    setNumber("+7");
    setPersonal(false);
    setModal(false);
  };
  return (
    <>
      <div className="delivery">
        <BackBatton sub="Посмотреть каталог товаров" />
        <div className="delivery__blockHeader blockHeader">
          <div className="blockHeader__title">Условия доставки</div>
        </div>
        <div className="delivery__body">
          <p className="delivery__paragraf">
            <span className="delivery__item icon-ll"></span>
            <span className="delivery__text">
              Мы осуществляем доставку кондиционеров и сплит-систем как с
              установкой, так и без нее. Вы можете воспользоваться тем видом
              услуги, который нужен вам, а также выбрать любое удобное время. Мы
              производим доставку ежедневно с 10:00 до 20:00. Дата и время
              обговариваются с менеджером интернет-магазина при обработке
              заказа. На срок доставки также влияет наличие товара на складе
            </span>
          </p>
          <p className="delivery__paragraf">
            <span className="delivery__item icon-ll"></span>
            <span className="delivery__text">
              В пределах МКАДа доставка до подъезда бесплатна. Выезд за МКАД
              оплачивается по тарифу 30 рублей за каждый дополнительный километр
            </span>
          </p>
          <p className="delivery__paragraf">
            <span className="delivery__item icon-ll"></span>
            <span className="delivery__text">
              Прием товара покупателем происходит в присутствии курьера или
              сотрудника монтажной службы. Важно внимательно изучить изделие на
              наличие повреждений, так как все дефекты лучше обнаружить до
              передачи вам товара продавцом. Если изделие устраивает покупателя,
              он подтверждает факт приема подписью в товарном чеке. В случае
              обнаружения повреждений до подписания «Акт приема-передачи» клиент
              имеет право не оплачивать товар.
            </span>
          </p>
          <div className="delivery__button">
            <Button onClick={(e) => setModal(true)}>Обратный звонок</Button>
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

export default Deliverypage;
