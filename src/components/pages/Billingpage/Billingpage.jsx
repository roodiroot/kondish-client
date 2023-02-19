import BackButton from '../../BackBatton/BackBatton'
import imgp from '../../../assets/img/billing/image.png'
import imgw from '../../../assets/img/billing/image.webp'
import './style.scss'
import SliderPyment from '../../SliderPyment/SliderPyment'

function Billingpage() {
    return (
        <div className="billing">
            <BackButton />
            <div className="billing__blockHeader blockHeader">
                <div className="blockHeader__title">Условия оплаты</div>
            </div>
            <div className="billing__body">
                <div className="billing__topBlock">
                    <div className="billing__description">
                        Вы можете оформить заказ понравившегося товара, нажав на соответствующую кнопку на
                        странице данного товара. А также по телефону с персональным менеджером. На странице
                        с товаром вы можете ознакомиться с характеристиками товара, наличием и стоимости товара
                    </div>
                    <div className="billing__media">
                        <picture>
                            <source srcSet={imgw} type="image/webp" />
                            <img src={imgp} alt="фото" />
                        </picture>
                    </div>
                </div>
                <div className="billing__bottomBlock">
                    <SliderPyment />
                </div>
            </div>
        </div>
    )
}

export default Billingpage