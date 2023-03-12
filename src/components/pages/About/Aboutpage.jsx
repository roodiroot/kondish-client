import "./style.scss";
import imgp from "../../../assets/img/about/image.png";
import imgw from "../../../assets/img/about/image.webp";
import ReviewsBlock from "../Main/components/ReviewsBlock";
import SocialBlock from "../../SocialBlock/SocialBlock";
import BackBatton from "../../BackBatton/BackBatton";

function Aboutpage() {
  return (
    <>
      <div className="about">
        <BackBatton />
        <div className="about__blockHeader blockHeader">
          <div className="blockHeader__title">О компании</div>
        </div>
        <div className="about__body">
          <div className="about__textBlock">
            <div className="about__text">
              <p>
                С 2012 года мы с командой занимаемся установкой сплит систем и
                кондиционеров. Мы стараемся не распыляться на другие услуги, а
                вот свое дело знаем очень хорошо.
              </p>
              <p>
                Не важно на сколько сложным может быть проект. Не важно сколько
                стен придется пробурить. Мы можем сказать вам с уверенностью,
                что мы справимся. И вы действительно будете счастливым
                владельцем климата в своем доме!
              </p>
              <p>
                Если вам не обходима помощь в подборе техники или просто ее
                монтаж, тогда звоните или пишите нам! Вы однозначно не
                пожалеете!
              </p>
            </div>
            <div className="about__social">
              <SocialBlock type="FOOTER" ws vk />
            </div>
          </div>
          <div className="about__mediaBlock">
            <picture>
              <source srcSet={imgw} type="image/webp"></source>
              <img src={imgp} alt="фото"></img>
            </picture>
          </div>
        </div>
      </div>
      <ReviewsBlock />
    </>
  );
}

export default Aboutpage;
