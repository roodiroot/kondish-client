import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchGallery } from "../../../store/reducers/ActionCreators";
import Button from "../../Button/Button";
import BackButton from "../../BackBatton/BackBatton";
import GalleryCard from "../../GalleryCard/GalleryCard";
import imgw from "../../../assets/img/galery/image.webp";
import imgp from "../../../assets/img/galery/image.png";

import "./style.scss";
import { useLocation } from "react-router-dom";
import Modal from "../../Modal/Modal";
import ModalBody from "../../Modal/ModalBody";
import SocialBlock from "../../SocialBlock/SocialBlock";
import { sendMessageAPI } from "../../../http/sendMessageAPI";
import Loader from "../../Loader/Loader";

function Galerypage() {
  const { gallery, isLoading } = useSelector((state) => state.galleryReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchGallery({
        limit: 50,
        page: 1,
      })
    );
  }, [dispatch]);

  const { pathname } = useLocation();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [personal, setPersonal] = useState(false);

  const inputArray = [
    { name: "Имя*", func: [name, setName] },
    { name: "Номер телефона*", func: [number, setNumber] },
  ];
  const sendMessage = () => {
    if (name === "" || name.length < 3 || name.length > 19)
      return alert("Введите корректоное Имя");
    if (number.length < 17 || number.length > 18)
      return alert("Введите корректоный номер телефона");
    if (personal === false)
      return alert(
        "Вы должны согласиться с политикой по обработке персональных данных"
      );
    const TOTAL = `Обратная связь с сайта Имя: ${name} Номер телефона: ${number} отправлено со страницы ${pathname}`;
    sendMessageAPI(TOTAL).then((d) => alert(d.message));
    setName("");
    setNumber("");
    setPersonal(false);
    setModal(false);
  };

  return (
    <>
      <div className="galery">
        <BackButton row sub="перейти в каталог" />
        <div className="galery__blockHeader blockHeader">
          <div className="blockHeader__title">
            Фотографии отражают весь наш профессионализм
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="galery__body">
              <div className="galery__textBlock">
                <div className="galery__text">
                  <p>
                    Мы делаем все возможное, что каждый, кто желает стать
                    полноправным хозяином климата в своем доме или на работе,
                    смог приобрести все необходимое по выгодным ценам.
                    Сотрудничество с ведущими мировыми производителями
                    климатической техники позволяет нам поддерживать большой
                    ассортимент
                  </p>
                </div>
                <SocialBlock type="FOOTER" vk dz ws tg />
              </div>
              <div className="galery__mediaBlock">
                <picture>
                  <source srcSet={imgw} type="image/webp" />
                  <img src={imgp} alt="фото" />
                </picture>
              </div>
            </div>
            <div className="galery__titleWrapper">Наши проекты</div>
            <div className="galery__wrapper">
              {gallery.rows &&
                gallery.rows.map((e) => <GalleryCard key={e.id} info={e} />)}
            </div>
          </>
        )}
        <div className="galery__button">
          <Button onClick={() => setModal(true)}>Заказать установку</Button>
        </div>
      </div>
      <Modal active={modal} setactive={setModal}>
        <ModalBody
          h2
          setCheckValue={setPersonal}
          checkValue={personal}
          input={inputArray}
          onClick={sendMessage}
        />
      </Modal>
    </>
  );
}

export default Galerypage;
