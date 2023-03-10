import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { sendMessageAPI } from "../http/sendMessageAPI";
import { notificationSlice } from "../store/reducers/NotificationSlice";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import ModalBody from "./Modal/ModalBody";
import Notification from "./Notification/Notification";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import TreeAngel from "./TreeAngle/TreeAngel";

function Layout() {
  const dispatch = useDispatch();
  const { bascetReducer, userReducer } = useSelector((state) => state);

  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [personal, setPersonal] = useState(true);

  const inputArray = [
    { name: "Имя*", func: [name, setName] },
    { name: "Номер телефона*", func: [number, setNumber] },
  ];
  const sendMessage = () => {
    if (name === "" || name.length < 3 || name.length > 19)
      return alert("Введите корректоное Имя");
    if (number.length < 16 || number.length > 18)
      return alert("Введите корректоный номер телефона");
    if (personal === false)
      return alert(
        "Вы должны согласиться с политикой по обработке персональных данных"
      );
    const TOTAL = `Обратная связь с сайта Имя: ${name} Номер телефона: ${number} отправлено с HEADER`;
    sendMessageAPI(TOTAL).then((d) => {
      dispatch(notificationSlice.actions.dindon("Ожидайте звонка..."));
      window.ym(92593100, "reachGoal", "target");
    });
    setName("");
    setNumber("");
    setPersonal(false);
    setModal(false);
  };
  return (
    <>
      <TreeAngel />
      <Header
        userReducer={userReducer}
        bascetReducer={bascetReducer}
        click={() => setModal(true)}
      ></Header>
      <div className="main">
        <div className="main__container">
          <ScrollToTop />
          {userReducer.isLoading ? <Loader /> : <Outlet />}
        </div>
      </div>
      <Footer></Footer>
      <Modal active={modal} setactive={setModal}>
        <ModalBody
          h2
          setCheckValue={setPersonal}
          checkValue={personal}
          input={inputArray}
          onClick={sendMessage}
        />
      </Modal>
      <Notification />
    </>
  );
}

export { Layout };
