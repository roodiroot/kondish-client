import Button from "../Button/Button";
import CheckIcon from "../CheckIcon/CheckIcon";
import Input from "../Input/Input";
import TitleModal from "../TitleModal/TitleModal";

function ModalBody({ checkValue, setCheckValue, input, onClick, h1, h2, h3 }) {
  return (
    <>
      <TitleModal h1={h1} h2={h2} h3={h3} style={{ marginBottom: "2.25rem" }}>
        Хотите заказать установку? Оставьте данные с вами свяжутся
      </TitleModal>
      {input.map((i) => (
        <Input
          key={i.name}
          style={{ marginBottom: "1.25rem" }}
          placeholder={i.name}
          value={i.func[0]}
          setValue={i.func[1]}
          number={i.name === "Номер телефона*"}
        />
      ))}
      <CheckIcon value={checkValue} setValue={setCheckValue}>
        Согласие на обработку данных
      </CheckIcon>
      <Button onClick={onClick}>Отправить</Button>
    </>
  );
}

export default ModalBody;
