import { useState } from "react";

import SocialBlock from "../../SocialBlock/SocialBlock";
import RowContacts from "./RowContacts";
import Button from "../../Button/Button";
import "./style.scss";
import CheckIcon from "../../CheckIcon/CheckIcon";
import Input from "../../Input/Input";
import BackBatton from "../../BackBatton/BackBatton";
import MapComponent from "../../Map/Map";
import { sendMessageAPI } from "../../../http/sendMessageAPI";

function Contactspage() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [personal, setPersonal] = useState(false);

  const sendMessage = () => {
    if (name === "" || name.length < 3 || name.length > 19)
      return alert("Введите корректоное Имя");
    if (number.length < 16 || number.length > 17)
      return alert("Введите корректоный номер телефона");
    if (personal === false)
      return alert(
        "Вы должны согласиться с политикой по обработке персональных данных"
      );
    const TOTAL = `Обратная связь с сайта Имя: ${name} Номер телефона: ${number} отправлено с формы обратной связи со страницы контакты`;
    sendMessageAPI(TOTAL).then((d) => console.log(d));
    setName("");
    setNumber("");
    setPersonal(false);
    return alert("Данные успешно отправлены. Ожидайте ответа специалиста");
  };
  return (
    <div className="contacts">
      <BackBatton />
      <div className="contacts__blockHeader blockHeader">
        <div className="blockHeader__title">Контакты</div>
      </div>
      <div className="contacts__body">
        <div className="contacts__contactsBlock">
          <div className="contacts__infoBlock">
            <div className="contacts_info">
              <RowContacts name="Номер телефона:" value="+7 915 329 42 09" />
              <RowContacts name="E-mail:" value="info@kondish.su" />
              <RowContacts
                name="Адрес сервисного цента:"
                value="ул. Симоновский Вал, 20, корп. 2, Москва, Россия"
              />
            </div>
            <div className="contacts_social">
              <SocialBlock type="FOOTER" tg ws />
            </div>
          </div>
          <div className="contacts__feedback">
            <RowContacts
              classNameName="infoRow"
              name="Оставить заявку"
              value="Остались вопросы? Свяжитесь с нами"
            />
            <Input
              value={name}
              setValue={setName}
              style={{ marginBottom: "1.75rem" }}
              placeholder="Имя*"
              type="text"
            />
            <Input
              number
              value={number}
              setValue={setNumber}
              style={{ marginBottom: "1.75rem" }}
              placeholder="Номер телефона*"
              type="text"
            />
            <div className="infoRow__service serviceBlock">
              <CheckIcon
                value={personal}
                setValue={setPersonal}
                href="(персональных данных)"
              >
                Согласие на обработку{" "}
              </CheckIcon>
            </div>
            <div className="infoRow__button">
              <Button type="sm" onClick={sendMessage}>
                Отправить
              </Button>
            </div>
          </div>
        </div>
        <div className="contacts__map">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default Contactspage;
