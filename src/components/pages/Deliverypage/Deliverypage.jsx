import BackBatton from '../../BackBatton/BackBatton'
import Button from '../../Button/Button'
import './style.scss'

function Deliverypage() {
    return (
        <div className="delivery">
            <BackBatton sub='Посмотреть каталог товаров' />
            <div className="delivery__blockHeader blockHeader">
                <div className="blockHeader__title">Условия доставки</div>
            </div>
            <div className="delivery__body">
                <p className="delivery__paragraf">
                    <span className="delivery__item icon-ll"></span>
                    <span className="delivery__text">Мы осуществляем доставку кондиционеров и сплит-систем как
                        с установкой, так и без нее. Вы можете воспользоваться тем видом услуги, который
                        нужен вам, а также выбрать любое удобное время. Мы производим доставку ежедневно
                        с 10:00 до 20:00. Дата и время обговариваются с менеджером интернет-магазина при
                        обработке заказа. На срок доставки также влияет наличие товара на складе</span>
                </p>
                <p className="delivery__paragraf">
                    <span className="delivery__item icon-ll"></span>
                    <span className="delivery__text">В пределах МКАДа доставка до подъезда бесплатна. Выезд за
                        МКАД оплачивается по тарифу 30 рублей за каждый дополнительный километр</span>
                </p>
                <p className="delivery__paragraf">
                    <span className="delivery__item icon-ll"></span>
                    <span className="delivery__text">Прием товара покупателем происходит в присутствии курьера
                        или сотрудника монтажной службы. Важно внимательно изучить изделие на наличие
                        повреждений, так как все дефекты лучше обнаружить до передачи вам товара продавцом.
                        Если изделие устраивает покупателя, он подтверждает факт приема подписью в
                        товарном чеке. В случае обнаружения повреждений до подписания «Акт приема-передачи»
                        клиент имеет право не оплачивать товар.</span>
                </p>
                <div className="delivery__button">
                    <Button >Обратный звонок</Button>
                </div>
            </div>
        </div>
    )
}

export default Deliverypage