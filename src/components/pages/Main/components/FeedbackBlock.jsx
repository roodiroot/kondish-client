import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessageAPI } from "../../../../http/sendMessageAPI";
import { notificationSlice } from "../../../../store/reducers/NotificationSlice";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";

function FeedbackBlock() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const sendMessage = () => {
    if (name === "" || name.length < 3 || name.length > 19)
      return alert("Введите корректоное Имя");
    if (number.length < 17 || number.length > 18)
      return alert("Введите корректоный номер телефона");
    const TOTAL = `Обратная связь с сайта Имя: ${name} Номер телефона: ${number} отправлено из формы обратной связи`;
    sendMessageAPI(TOTAL).then((d) => {
      dispatch(notificationSlice.actions.dindon("Ожидайте звонка..."));
    });
    setName("");
    setNumber("");
  };
  return (
    <div className="feedbackBlock">
      <div className="feedbackBlock__blockHeader blockHeader">
        <div className="blockHeader__title">Остались вопросы ?</div>
        <div className="blockHeader__subtitle">
          Заполните форму, и мы с радостью с вами свяжемся и ответим на все
          интересующие вас вопросы
        </div>
      </div>
      <div className="feedbackBlock__body">
        <Input placeholder="Имя*" value={name} setValue={setName} />
        <Input
          number
          placeholder="Номер телефона*"
          value={number}
          setValue={setNumber}
        />
        <div className="feedbackBlock__button">
          <Button onClick={sendMessage}>Заказать звонок</Button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackBlock;
