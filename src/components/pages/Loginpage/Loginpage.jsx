import BackButton from "../../BackBatton/BackBatton";
import TitleModal from "../../TitleModal/TitleModal";
import FuncLofinComponent from "./FuncLofinComponent";

import "./style.scss";

function Loginpage() {
  return (
    <div className="loginPage">
      <BackButton row sub="В каталог" />
      <TitleModal h2 style={{ marginBottom: "1.5rem" }}>
        Авторизация
      </TitleModal>
      <div className="loginPage__body">
        <FuncLofinComponent />
      </div>
    </div>
  );
}

export default Loginpage;
