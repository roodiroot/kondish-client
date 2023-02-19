import classNames from "classnames";
import React, { useState } from "react";
import { createGalleryAPI } from "../../../http/galleryAPI";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import StatusLine from "../../StatusLine/StatusLine";
import TitleModal from "../../TitleModal/TitleModal";

function AddPortfolio() {
  const [description, setDescription] = useState("");
  const [descriptionAlert, setDescriptionAlert] = useState(false);

  const [img, setImg] = useState(null);
  const [imgAlert, setImgAlert] = useState(false);

  //ПОКАЗАТЕЛЬ СТАТУСА ЗАГРУЗКИ
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);

  const inputsObj = [
    {
      id: 1,
      placeholder: "Введите описание",
      title: "Описание проекта",
      sv: setDescription,
      v: description,
      alert: descriptionAlert,
      setAlert: setDescriptionAlert,
    },
  ];
  // ВАЛИДАЦИЯ ПОЛЕЙ
  const validationFunc = (func) => {
    let checkError = true;
    //ОБРАБОТКА ТЕКСТОВЫХ ЗНАЧЕНИЙ
    if (!description || description.length >= 400) {
      console.log("Описание должно быть не более 400 символов, и не");
      checkError = false;
      setDescriptionAlert(true);
    }
    //ОБРАБОТКА FILES
    if (
      img === null ||
      img === undefined ||
      (img?.type !== "image/jpeg" &&
        img?.type !== "image/png" &&
        img?.type !== "image/jpg")
    ) {
      checkError = false;
      console.log("Фото должно быть в правильном формате");
      setImgAlert(true);
    }

    //УСПЕШНОСТЬ ВАЛИДАЦИИ
    if (checkError) func();
  };
  const addProject = async () => {
    validationFunc(async () => {
      // ПЕРЕДАЧА НА СЕРВЕР
      const formData = new FormData();
      formData.append("description", description);

      formData.append("img", img);
      return await createGalleryAPI(formData)
        .then((i) => setOk(true))
        .catch((i) => setError(true));
    });
  };
  return (
    <>
      <StatusLine ok={ok} setOk={setOk} error={error} setError={setError} />
      <TitleModal style={{ marginBottom: "1.5rem" }}>
        Добавление проекта
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
          <div className={classNames("fileInputWrapper", { nofile: imgAlert })}>
            <input
              onChange={(e) => setImg(e.target.files[0])}
              type="file"
              accept=".jpg, .jpeg, .png"
            />
          </div>
        </div>
      </div>
      <Button onClick={addProject} type="sm">
        Добавить
      </Button>
    </>
  );
}

export default AddPortfolio;
