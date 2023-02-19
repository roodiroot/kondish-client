import classNames from "classnames";
import React, { useState } from "react";
import { createArticleAPI } from "../../../http/articleAPI";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import StatusLine from "../../StatusLine/StatusLine";
import TitleModal from "../../TitleModal/TitleModal";

function AddArticle() {
  const [title, setTitle] = useState("");
  const [titleAlert, setTitleAlert] = useState(false);

  const [subtitle, setSubtitle] = useState("");
  const [subtitleAlert, setSubtitleAlert] = useState(false);

  const [text, setText] = useState("");
  const [textAlert, setTextAlert] = useState(false);

  // ЗАГРУЗКА ФАЙЛОВ
  const [img, setImg] = useState(null);
  const [alertImg, alertSetImg] = useState(false);

  //ПОКАЗАТЕЛЬ СТАТУСА ЗАГРУЗКИ
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);

  // функциональная часть компенты
  const inputsObj = [
    {
      id: 1,
      placeholder: "Введите заголовок",
      title: "Заголовок",
      sv: setTitle,
      v: title,
      alert: titleAlert,
      setAlert: setTitleAlert,
    },
    {
      id: 2,
      placeholder: "Введите описание статьи",
      title: "Описание статьи",
      sv: setSubtitle,
      v: subtitle,
      alert: subtitleAlert,
      setAlert: setSubtitleAlert,
    },
    {
      id: 3,
      placeholder: "Введите текст",
      title: "Основной текст",
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
    if (!title || title?.length >= 250) {
      console.log(
        "заголовок должен быть не короче одного и не длиннее 100 символов"
      );
      checkError = false;
      setTitleAlert(true);
    }
    if (!subtitle || subtitle?.length >= 1000) {
      console.log(
        "подзаголовок должен быть не короче одного и не длиннее 1000 символов"
      );
      checkError = false;
      setSubtitleAlert(true);
    }
    if (!text || text?.length >= 3000) {
      console.log(
        "текст должен быть не короче одного и не длиннее 3000 символов"
      );
      checkError = false;
      setTextAlert(true);
    }
    //ОБРАБОТКА FILES
    if (
      img === null ||
      img === undefined ||
      (img?.type !== "image/jpeg" &&
        img?.type !== "image/png" &&
        img?.type !== "image/jpg")
    ) {
      console.log("картинка отсутствует либо имеет не правильный формат");
      checkError = false;
      alertSetImg(true);
    }

    //УСПЕШНОСТЬ ВАЛИДАЦИИ
    if (checkError) func();
  };

  // ДОБАВЛЕНИЕ СТАТЬИ
  const addArticle = async () => {
    validationFunc(async () => {
      // ПЕРЕДАЧА НА СЕРВЕР
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("text", text);

      formData.append("img", img);
      return await createArticleAPI(formData)
        .then((i) => setOk(true))
        .catch((i) => setError(true));
    });
  };

  return (
    <>
      <StatusLine ok={ok} setOk={setOk} error={error} setError={setError} />
      <TitleModal style={{ marginBottom: "1.5rem" }}>
        Добавление статьи
      </TitleModal>
      <div className="addInputBlockWrapper">
        {inputsObj.map((i, index) => (
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
              area
            />
          </div>
        ))}
        <div className="addInputBlock">
          <div className="addInputBlock__title">Загрузите изображение png</div>
          <div className={classNames("fileInputWrapper", { nofile: alertImg })}>
            <input
              onChange={(e) => setImg(e.target.files[0])}
              type="file"
              accept=".jpg, .jpeg, .png"
            />
          </div>
        </div>
      </div>
      <Button onClick={addArticle} type="sm">
        Добавить
      </Button>
    </>
  );
}

export default AddArticle;
