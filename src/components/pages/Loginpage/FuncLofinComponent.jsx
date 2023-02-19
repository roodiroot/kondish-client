import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../Button/Button";
import Input from "../../Input/Input";
import { loginUser } from "../../../store/reducers/ActionCreators";

function FuncLofinComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // УПРАВЛЯЕМЫЕ ИНПУТЫ
  const [email, setEmail] = useState("");
  const [emailAlert, setEmailAlser] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordAlert, setPasswordAlert] = useState(false);
  // ОБЪЕКТ С ИНФОРМАЦИЕЙ ДЛЯ ИНПУТОВ
  const inputsObj = [
    {
      id: 1,
      placeholder: "Введите e-mail",
      title: "E-mail",
      sv: setEmail,
      v: email,
      alert: emailAlert,
      setAlert: setEmailAlser,
    },
    {
      id: 2,
      placeholder: "Введите пароль",
      title: "Пароль",
      sv: setPassword,
      v: password,
      alert: passwordAlert,
      setAlert: setPasswordAlert,
    },
  ];

  //ВАЛИДАЦИЯ ЗНАЧЕНИЙ
  const validationFunc = (callback) => {
    let checkError = true;
    if (!email || email.length >= 30) {
      checkError = false;
      console.log("Укажите почту");
      setEmailAlser(true);
    }
    if (!password || password.length >= 30) {
      checkError = false;
      console.log("Укажите пароль");
      setPasswordAlert(true);
    }
    if (checkError) callback();
  };
  // ЗАПРОС ЛОГИНА ПОЛЬЗОВАТЕЛЯ
  const logIn = () => {
    validationFunc(async () => {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      dispatch(loginUser(formData)).then((e) => {
        if (e.payload === "Указан не правильный пароль") {
          setPassword("");
          setPasswordAlert(true);
          console.log(e.payload);
          return;
        }
        if (e.payload === "Пользователь не найдиен") {
          setEmail("");
          setEmailAlser(true);
          console.log(e.payload);
          return;
        }
        if (e.payload?.role === "ADMIN") {
          navigate("/admin-page");
        }
      });
      return;
    });
  };

  return (
    <>
      <div className="inputsBlock">
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
              type={i.title === "Пароль" && "password"}
            />
          </div>
        ))}
      </div>
      <Button onClick={logIn} type="sm">
        Войти
      </Button>
    </>
  );
}

export default FuncLofinComponent;
