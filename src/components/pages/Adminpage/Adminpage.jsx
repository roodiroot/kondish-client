import { useState } from "react";
import { Link } from "react-router-dom";

import BackBatton from "../../BackBatton/BackBatton";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import TitleModal from "../../TitleModal/TitleModal";
import AddArticle from "./AddArticle";
import AddPortfolio from "./AddPortfolio";
import AddPrduct from "./AddPrduct";
import AddRewivs from "./AddRewivs";

import "./style.scss";

function Adminpage() {
  const [modulAddProduct, setModalAddProduct] = useState(false);
  const [modulAddRewievs, setModalAddRewievs] = useState(false);
  const [modulAddArticle, setModalAddArticle] = useState(false);
  const [modulAddPortfolio, setModalAddPortfolio] = useState(false);

  const addBlockArr = [
    {
      name: "Добавтить устройство",
      button: "Добавить продукт",
      value: modulAddProduct,
      setValue: setModalAddProduct,
      component: AddPrduct,
      to: "/admin-page/products-list-page",
    },
    {
      name: "Добавтить отзыв от клиента",
      button: "Добавтить отзыв",
      value: modulAddRewievs,
      setValue: setModalAddRewievs,
      component: AddRewivs,
      to: "/admin-page/rewievs-list-page",
    },
    {
      name: "Добавтить новую статью",
      button: "Добавтить статью",
      value: modulAddArticle,
      setValue: setModalAddArticle,
      component: AddArticle,
      to: "/admin-page/articles-list-page",
    },
    {
      name: "Добавтить фото с описанием в портфолио",
      button: "Добавтить фото",
      value: modulAddPortfolio,
      setValue: setModalAddPortfolio,
      component: AddPortfolio,
      to: "/admin-page/portfolio-list-page",
    },
  ];

  return (
    <div>
      <div className="admin">
        <div className="admin__back">
          <BackBatton />
          <Link className="admin__back2" to="/">
            вернуться на главную страницу
          </Link>
        </div>
        <div className="admin__body">
          {addBlockArr &&
            addBlockArr.map((e) => (
              <div key={e.name} className="admin__block">
                <TitleModal h3>{e.name}</TitleModal>
                <Link to={e.to}>
                  <div>Показать список</div>
                </Link>
                <Button type="sm" onClick={() => e.setValue(!e.value)}>
                  {e.button}
                </Button>
              </div>
            ))}
        </div>
      </div>
      {addBlockArr &&
        addBlockArr.map((e) => (
          <Modal
            key={e.name}
            minWidth="850px"
            active={e.value}
            setactive={e.setValue}
          >
            {e.value && <e.component />}
          </Modal>
        ))}
    </div>
  );
}

export default Adminpage;
