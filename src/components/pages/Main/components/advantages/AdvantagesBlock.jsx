import BlockAdvantage from "./BlockAdvantage";
import "./style.scss";

function AdvantagesBlock() {
  return (
    <div className="advantage">
      <BlockAdvantage header="Дока" icon="lamp">
        Вы уже подобрали технику? Или вам нужен совет экспертов? Мы рады помочь
        установить для вас только лучшие модели. Оставьте заявку или позвоните
        нам.
      </BlockAdvantage>
      <BlockAdvantage header="Качество" icon="sistem">
        Вы можете доверить нам ваш климат. Мы специализируемся только на
        установке и подборе систем кондиционирования с 2013 года.
      </BlockAdvantage>
      <BlockAdvantage header="Цены" icon="salies">
        Самые гибкие на рынке системы скидок. Установка кондиционера в квартиру
        от 10 000р. Подробную консультацию можно получить по телефону.
      </BlockAdvantage>
    </div>
  );
}

export default AdvantagesBlock;
