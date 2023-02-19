import classNames from "classnames";
import InputMask from "react-input-mask";

import "./style.scss";

function Input({
  placeholder,
  type,
  style,
  value,
  setValue,
  number,
  mini,
  alert,
  setAlert,
  area,
}) {
  type = type || "text";
  placeholder = placeholder || "введите plaseholder";

  const changeValue = (e) => {
    setValue(e.target.value);
    if (alert) {
      setAlert(false);
    }
  };

  if (number) {
    return (
      <div style={style} className="castomInput">
        <InputMask
          mask="8 (999) 999-99-99"
          maskChar={null}
          // alwaysShowMask={false}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    );
  }
  if (area) {
    return (
      <div
        style={style}
        className={classNames("castomInput", "area", { mini }, { alert })}
      >
        <textarea
          value={value}
          onChange={(e) => changeValue(e)}
          placeholder={placeholder}
          type={type}
        ></textarea>
      </div>
    );
  }
  return (
    <div
      style={style}
      className={classNames("castomInput", { mini }, { alert })}
    >
      <input
        value={value}
        onChange={(e) => changeValue(e)}
        placeholder={placeholder}
        type={type}
      ></input>
    </div>
  );
}

export default Input;
