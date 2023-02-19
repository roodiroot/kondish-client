import BillingPanelRow from './BillingPanelRow'

function BillingPanel({ count, countPosition, delivery, installation, totalSumm, modal, TC }) {

    return (
        <div className="billingBlock__checkBlock">
            <div className="billingBlock__title">Итоги заказа</div>
            <div className="billingBlock__paymentBlock">
                <BillingPanelRow si='Шт.' value={count}>Всего мест:</BillingPanelRow>
                <BillingPanelRow si='Шт.' value={countPosition}>Колличество товаров:</BillingPanelRow>
                <BillingPanelRow style={{ marginBottom: '2rem' }} si='₽' value={totalSumm}>Промежуточный итог:</BillingPanelRow>
                {delivery && <BillingPanelRow si='₽' value='400'>Доставка:</BillingPanelRow>}
                {installation && <BillingPanelRow si='₽' value='12600'>Установка:</BillingPanelRow>}
            </div>
            <div className="billingBlock__totalBlock">
                <div className="billingBlock__payRow totalRow">
                    <div className="billingBlock__key">ИТОГО:</div>
                    <div className="billingBlock__meaning total">₽ {TC || totalSumm}</div>
                </div>
                <div className="billingBlock__button">
                    <div onClick={modal} className="buttonMain">Оформление заказа</div>
                </div>
                <div className="billingBlock__warning">После оформления заказа ожидайте звонка специалисьта для уточнения условий заказа</div>
            </div>
        </div>
    )
}

export default BillingPanel