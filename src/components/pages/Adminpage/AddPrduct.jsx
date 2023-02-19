import classNames from "classnames";
import React, { useState } from "react";
import { createProductAPI } from "../../../http/productAPI";
import Button from "../../Button/Button";
import CheckIcon from "../../CheckIcon/CheckIcon";
import Input from "../../Input/Input";
import StatusLine from "../../StatusLine/StatusLine";
import TitleModal from "../../TitleModal/TitleModal";

function AddPrduct() {
  //СТРОКОВЫЕ ЗНАЧЕНИЯ
  const [name, setName] = useState("");
  const [alertName, alertSetName] = useState(false);

  const [brand, setBrand] = useState("");
  const [alertBrand, alertSetBrand] = useState(false);

  const [brand_country, setBrand_country] = useState("");
  const [alertBrand_country, alertsetBrand_country] = useState(false);

  const [manufacture_country, setManufacture_country] = useState("");
  const [alertManufacture_country, alertsetManufacture_country] =
    useState(false);

  const [vendor_code, setVendor_code] = useState("");
  const [alertVendor_code, alertsetVendor_code] = useState(false);

  const [WiFi, setWiFi] = useState("");
  const [alertWiFi, alertSetWiFi] = useState(false);

  const [energy_class, setEnergy_class] = useState("");
  const [alertEnergy_class, alertSetEnergy_class] = useState(false);

  const [compressor, setCompressor] = useState("");
  const [alertCompressor, alertSetCompressor] = useState(false);

  const [description, setDescription] = useState("");
  const [alertDescription, alertSetDescription] = useState(false);

  //ЧИСЛОВЫЕ ЗНАЧЕНИЯ
  const [price, setPrice] = useState(0);
  const [alertPrice, alertSetPrice] = useState(false);

  const [pipe_length_max, setPipe_length_max] = useState(0);
  const [alertPipe_length_max, alertSetPipe_length_max] = useState(false);

  const [S, setS] = useState(0);
  const [alertS, alertSetS] = useState(false);

  const [heating_power, setHeating_power] = useState(0);
  const [alertHeating_power, alertSetHeating_power] = useState(false);

  const [cooling_power, setCooling_power] = useState(0);
  const [alertCooling_power, alertSetCooling_power] = useState(false);

  const [noise, setNoise] = useState(0);
  const [alertNoise, alertSetNoise] = useState(false);

  // БУЛЕВЫЕ ЗНАЧЕНИЯ
  const [hit, setHit] = useState(false);
  const [external, setExternal] = useState(false);

  // ЗАГРУЗКА ФАЙЛОВ
  const [img, setImg] = useState(null);
  const [alertImg, alertSetImg] = useState(false);

  const [imgArray, setImgArray] = useState(null);
  const [alertImgArray, alertSetImgArray] = useState(null);

  //ПОКАЗАТЕЛЬ СТАТУСА ЗАГРУЗКИ
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);

  // ВАЛИДАЦИЯ ПОЛЕЙ
  const validationFunc = (func) => {
    let checkError = true;
    //ОБРАБОТКА ТЕКСТОВЫХ ЗНАЧЕНИЙ
    if (!name || name.length >= 50) {
      checkError = false;
      alertSetName(true);
    }
    if (!brand || brand.length >= 15) {
      checkError = false;
      alertSetBrand(true);
    }
    if (!brand_country || brand_country.length >= 15) {
      checkError = false;
      alertsetBrand_country(true);
    }
    if (!manufacture_country || manufacture_country.length >= 15) {
      checkError = false;
      alertsetManufacture_country(true);
    }
    if (!vendor_code || vendor_code.length >= 15) {
      checkError = false;
      alertsetVendor_code(true);
    }
    // if (!WiFi || WiFi.length >= 15) return alertSetBrand(true);
    if (!energy_class || energy_class.length >= 15) alertSetEnergy_class(true);
    // if (!compressor || compressor.length >= 15) return alertSetBrand(true);
    // if (!description || description.length >= 1000) return alertSetBrand(true);

    //ОБРАБОТКА NUMBER
    if (isNaN(Number(price)) || Number(price) === 0) {
      checkError = false;
      alertSetPrice(true);
    }
    if (isNaN(Number(pipe_length_max))) {
      checkError = false;
      alertSetPipe_length_max(true);
    }
    if (isNaN(Number(S)) || Number(S) === 0) {
      checkError = false;
      alertSetS(true);
    }
    if (isNaN(Number(heating_power)) || Number(heating_power) === 0) {
      checkError = false;
      alertSetHeating_power(true);
    }
    if (isNaN(Number(cooling_power)) || Number(cooling_power) === 0) {
      checkError = false;
      alertSetCooling_power(true);
    }
    if (isNaN(Number(noise)) || Number(noise) === 0) {
      checkError = false;
      alertSetNoise(true);
    }

    //ОБРАБОТКА FILES
    if (img === null || img?.type !== "image/png") {
      console.log(
        "картинок несколько или они отсутствуют или имеют не правильный формат!"
      );
      checkError = false;
      alertSetImg(true);
    }

    if (
      imgArray?.length >= 4 ||
      imgArray === null ||
      imgArray?.length === 0 ||
      imgArray === undefined
    ) {
      checkError = false;
      console.log("массив картинок превышает 4 или отсутствует");
      alertSetImgArray(true);
    }

    if (imgArray) {
      for (let i = 0; i < imgArray.length; i++) {
        if (
          imgArray[i].type !== "image/jpg" &&
          imgArray[i].type !== "image/png" &&
          imgArray[i].type !== "image/jpeg"
        ) {
          checkError = false;
          console.log("выбран не правильный формат файлов");
          alertSetImgArray(true);
        }
      }
    }
    // ОБРАБОТКА БУЛЕВОГО ЗНАЧЕНИЯ
    if (typeof hit !== "boolean") {
      checkError = false;
      console.log("параметр hit, должен быть булевым значением");
    }
    if (typeof external !== "boolean") {
      checkError = false;
      console.log("параметр external, должен быть булевым значением");
    }
    //УСПЕШНОСТЬ ВАЛИДАЦИИ
    if (checkError) func();
  };

  // функциональная часть компенты
  const addProduct = () => {
    validationFunc(async () => {
      // ПЕРЕДАЧА НА СЕРВЕР
      const formData = new FormData();
      formData.append("name", name);
      formData.append("brand", brand);
      formData.append("brand_country", brand_country);
      formData.append("manufacture_country", manufacture_country);
      formData.append("energy_class", energy_class);
      formData.append("compressor", compressor);
      formData.append("WiFi", WiFi);
      formData.append("description", description);

      formData.append("vendor_code", `${vendor_code}`);
      formData.append("price", `${price}`);
      formData.append("pipe_length_max", `${pipe_length_max}`);
      formData.append("S", `${S}`);
      formData.append("heating_power", `${heating_power}`);
      formData.append("cooling_power", `${cooling_power}`);
      formData.append("noise", `${noise}`);

      for (let i = 0; i < imgArray.length; i++) {
        formData.append("img_array", imgArray[i]);
      }
      formData.append("img", img);

      formData.append("hit", hit);
      formData.append("external", external);
      return await createProductAPI(formData)
        .then((data) => setOk(true))
        .catch((d) => setError(true));
    });
  };

  const inputsObj = [
    {
      id: 1,
      placeholder: "Введите имя",
      title: "Имя",
      sv: setName,
      v: name,
      alert: alertName,
      setAlert: alertSetName,
    },
    {
      id: 2,
      placeholder: "Введите бренд",
      title: "Бренд",
      sv: setBrand,
      v: brand,
      alert: alertBrand,
      setAlert: alertSetBrand,
    },
    {
      id: 3,
      placeholder: "Введите страну бренда",
      title: "Страна бренда",
      sv: setBrand_country,
      v: brand_country,
      alert: alertBrand_country,
      setAlert: alertsetBrand_country,
    },
    {
      id: 4,
      placeholder: "Введите страну производства",
      title: "Страна производства",
      sv: setManufacture_country,
      v: manufacture_country,
      alert: alertManufacture_country,
      setAlert: alertsetManufacture_country,
    },
    {
      id: 5,
      placeholder: "Введите цену",
      title: "Цена",
      sv: setPrice,
      v: price,
      alert: alertPrice,
      setAlert: alertSetPrice,
    },
    {
      id: 6,
      placeholder: "Введите вендор код",
      title: "Вендор код",
      sv: setVendor_code,
      v: vendor_code,
      alert: alertVendor_code,
      setAlert: alertsetVendor_code,
    },
    {
      id: 7,
      placeholder: "Введите максимальную длина кабеля",
      title: "Максимальную длина кабеля",
      sv: setPipe_length_max,
      v: pipe_length_max,
      alert: alertPipe_length_max,
      setAlert: alertSetPipe_length_max,
    },
    {
      id: 8,
      placeholder: "Введите площадь помещения",
      title: "Площадь помещения",
      sv: setS,
      v: S,
      alert: alertS,
      setAlert: alertSetS,
    },
    {
      id: 9,
      placeholder: "Введите мощность на обогрев",
      title: "Мощность на обогрев",
      sv: setHeating_power,
      v: heating_power,
      alert: alertHeating_power,
      setAlert: alertSetHeating_power,
    },
    {
      id: 10,
      title: "Мощность на охлаждение",
      placeholder: "Введите мощность на охлаждение",
      sv: setCooling_power,
      v: cooling_power,
      alert: alertCooling_power,
      setAlert: alertSetCooling_power,
    },
    {
      id: 11,
      title: "Уровень шума",
      placeholder: "Введите уровень шума",
      sv: setNoise,
      v: noise,
      alert: alertNoise,
      setAlert: alertSetNoise,
    },
    {
      id: 12,
      title: "Наличие WiFi",
      placeholder: "Введите наличие WiFi",
      sv: setWiFi,
      v: WiFi,
      alert: alertWiFi,
      setAlert: alertSetWiFi,
    },
    {
      id: 13,
      title: "Класс энерго потребления",
      placeholder: "Введите класс энерго потребления",
      sv: setEnergy_class,
      v: energy_class,
      alert: alertEnergy_class,
      setAlert: alertSetEnergy_class,
    },
    {
      id: 14,
      title: "Технология компрессора",
      placeholder: "Введите технологию компрессора",
      sv: setCompressor,
      v: compressor,
      alert: alertCompressor,
      setAlert: alertSetCompressor,
    },
    {
      id: 15,
      title: "Описание",
      placeholder: "Введите описание",
      sv: setDescription,
      v: description,
      alert: alertDescription,
      setAlert: alertSetDescription,
    },
  ];

  return (
    <>
      <StatusLine ok={ok} setOk={setOk} error={error} setError={setError} />
      <TitleModal style={{ marginBottom: "1.5rem" }}>
        Добавление прибора
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
            />
          </div>
        ))}
        <div className="addInputBlock">
          <div className="addInputBlock__title">Загрузите изображение png</div>
          <div className={classNames("fileInputWrapper", { nofile: alertImg })}>
            <input
              onChange={(e) => setImg(e.target.files[0])}
              type="file"
              accept=".png"
            />
          </div>
        </div>
        <div className="addInputBlock">
          <div className="addInputBlock__title">
            Загрузите от 1 - 3 изображения
          </div>
          <div
            className={classNames("fileInputWrapper", {
              nofile: alertImgArray,
            })}
          >
            <input
              onChange={(e) => setImgArray(e.target.files)}
              multiple
              type="file"
              accept=".jpg, .jpeg, .png"
            />
          </div>
        </div>
        <div className="addInputBlock">
          <div className="addInputBlock__title">Установить значек ХИТА?</div>
          <CheckIcon value={hit} setValue={setHit} />
        </div>
        <div className="addInputBlock">
          <div className="addInputBlock__title">Внешний БЛОК?</div>
          <CheckIcon value={external} setValue={setExternal} />
        </div>
      </div>
      <Button onClick={addProduct} type="sm">
        Добавить
      </Button>
    </>
  );
}

export default AddPrduct;
