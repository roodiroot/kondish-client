import React from "react";
import Button from "../../Button/Button";
import CheckIcon from "../../CheckIcon/CheckIcon";
import Range from "../../Range/Range";
import Select from "../../Select/Select";

import "./filters.scss";

function FiltersBlock({ props, setSp, sp }) {
  const reset = () => {
    props.showAll();
    setSp(!sp);
  };
  return (
    <>
      <div className="filters__block">
        <Range
          minPrice={props.minPrice}
          maxPrice={props.maxPrice}
          setMinPrice={props.setMinPrice}
          setMaxPrice={props.setMaxPrice}
          name="Диапазон цен ₽"
        />
        <Select
          list={props.brandsList}
          name="Бренд"
          value={props.brand}
          setValue={props.setBrand}
        />
        <Select
          list={props.SesList}
          name="Площадь помещения"
          value={props.S}
          setValue={props.setS}
        />
        <Select
          name="Wi-Fi"
          list={props.wifiLIst}
          value={props.WiFi}
          setValue={props.setWiFi}
        />
        <Select
          name="Технология компрессора"
          list={props.compressorLIst}
          value={props.compressor}
          setValue={props.setCompressor}
        />
        <div className="blockItem">
          <CheckIcon value={props.external} setValue={props.setExternal} />
          <div className="blockItem__description">Мультисплит-система</div>
        </div>
        <div className="blockItem">
          <CheckIcon value={props.hit} setValue={props.setHit} />
          <div className="blockItem__description">Популярные товары</div>
        </div>
      </div>
      <div className="filters__buttons">
        <Button onClick={props.showProducts}>Найти</Button>
        <Button type="nbt" onClick={reset}>
          Сбросить
        </Button>
      </div>
    </>
  );
}

export default FiltersBlock;
