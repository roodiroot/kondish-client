import React, { useState } from "react";
import { createReviewsAPI } from "../../../http/reviewsAPI";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import StatusLine from "../../StatusLine/StatusLine";
import TitleModal from "../../TitleModal/TitleModal";

function AddRewivs() {
  const [service, setService] = useState("");
  const [serviceAlert, setServiceAlert] = useState(false);

  const [name_person, setName_person] = useState("");
  const [name_personAlert, setName_personAlert] = useState(false);

  const [text, setText] = useState("");
  const [textAlert, setTextAlert] = useState(false);

  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);

  const inputsObj = [
    {
      id: 1,
      placeholder: "Введите услугу",
      title: "Проделанная услуга",
      sv: setService,
      v: service,
      alert: serviceAlert,
      setAlert: setServiceAlert,
    },
    {
      id: 2,
      placeholder: "Максим Б",
      title: "Введите Имя",
      sv: setName_person,
      v: name_person,
      alert: name_personAlert,
      setAlert: setName_personAlert,
    },
    {
      id: 3,
      placeholder: "Введите текст",
      title: "Текст отзыва",
      sv: setText,
      v: text,
      alert: textAlert,
      setAlert: setTextAlert,
    },
  ];

  // ВАЛИДАЦИЯ ПОЛЕЙ
  const validationFunc = (func) => {
    let checkError = true;
    //ОБРАБОТКА ТЕКСТОВЫХ ЗНАЧЕНИЙ
    if (!service || service.length > 50) {
      console.log(
        "название проделанной услуги не должно быть 0 или более 50 символов"
      );
      checkError = false;
      setServiceAlert(true);
    }
    if (!name_person || name_person.length > 50) {
      console.log("Имя не должно быть 0 или более 50 символов");
      checkError = false;
      setName_personAlert(true);
    }
    if (!text || text.length > 500) {
      console.log("текст не должен быть 0 или более 500 символов");
      checkError = false;
      setTextAlert(true);
    }

    //УСПЕШНОСТЬ ВАЛИДАЦИИ
    if (checkError) func();
  };

  const addReviews = () => {
    validationFunc(async () => {
      // ПЕРЕДАЧА НА СЕРВЕР
      const formData = new FormData();
      formData.append("service", service);
      formData.append("name_person", name_person);
      formData.append("text", text);
      return await createReviewsAPI(formData)
        .then((i) => setOk(true))
        .catch((i) => setError(true));
    });
  };

  return (
    <>
      <StatusLine ok={ok} setOk={setOk} error={error} setError={setError} />
      <TitleModal style={{ marginBottom: "1.5rem" }}>
        Добавление отзыва
      </TitleModal>
      <div className="addInputBlockWrapper">
        {inputsObj.map((i) => (
          <div key={i.id} className="addInputBlock">
            <div className="addInputBlock__title">{i.title}</div>
            <Input
              style={{ marginBottom: "0.5rem" }}
              alert={i.alert}
              setAlert={i.setAlert}
              value={i.v}
              setValue={i.sv}
              placeholder={i.placeholder}
              mini
              area={i.title === "Текст отзыва"}
            />
          </div>
        ))}
      </div>
      <Button onClick={addReviews} type="sm">
        Добавить
      </Button>
    </>
  );
}

export default AddRewivs;
