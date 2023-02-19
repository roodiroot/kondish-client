import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { sendMessageAPI } from '../../../http/sendMessageAPI'

import { bascetSlice } from '../../../store/reducers/BascetSlice'
import BillingPanel from '../../BillingPanel/BillingPanel'
import CheckIcon from '../../CheckIcon/CheckIcon'
import Modal from '../../Modal/Modal'
import ModalBody from '../../Modal/ModalBody'
import TitleModal from '../../TitleModal/TitleModal'
import BascetElement from './BascetElement'

import './style.scss'


function Bascetpage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { productsBasket, count, countPosition, totalSumm, } = useSelector(state => state.bascetReducer)
    const [delivery, setDelivery] = useState(false)
    const [installation, setInstallation] = useState(false)
    const [modal, setModal] = useState(false)
    const [TCs, setTCs] = useState(null)

    useEffect(() => {
        dispatch(bascetSlice.actions.addDelivery(delivery))
    }, [dispatch, delivery])
    useEffect(() => {
        dispatch(bascetSlice.actions.addInstallation(installation))
    }, [dispatch, installation])

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [personal, setPersonal] = useState(false)

    const inputArray = [
        { name: 'Имя*', func: [name, setName] },
        { name: 'Номер телефона*', func: [number, setNumber] }
    ]

    const sendMessage = () => {
        if (name === '' || name.length < 3 || name.length > 19) return alert('Введите корректоное Имя')
        if (number.length < 16 || number.length > 18) return alert('Введите корректоный номер телефона')
        if (personal === false) return alert('Вы должны согласиться с политикой по обработке персональных данных')
        addOrder(` Имя: ${name} Номер телефона: ${number}`)
        setName('')
        setNumber('')
        setPersonal(false)
        setModal(false)
    }

    const addOrder = (text) => {
        let string = []
        for (let i = 0; i < productsBasket.length; i++) {
            let st = `${productsBasket[i].name} кол:${productsBasket[i].count} на сумму:${productsBasket[i].summ} \n`
            string.push(st)
        }
        const TOTAL = `Новый заказ на: \n ${string.join()} \n общее кол-во товара ${countPosition} \n количество мест ${count} \n включительно: ${delivery ? 'доставка' : 'без доставки'} \n включительно: ${installation ? 'установка' : 'без установки'}  \n общей стоимостью ${TCs || totalSumm} \n Заказ оформлент на ${text} `
        dispatch(bascetSlice.actions.dropBasket())
        sendMessageAPI(TOTAL).then(d => console.log(d))
    }

    useEffect(() => {
        let TC;
        if (delivery && installation) TC = Number(totalSumm) + 400 + 12600
        if (delivery && !installation) TC = Number(totalSumm) + 400
        if (!delivery && installation) TC = Number(totalSumm) + 12600
        if (!delivery && !installation) TC = Number(totalSumm)
        setTCs(TC)
    }, [delivery, installation])

    return (
        <>
            <div className="cart">
                <div onClick={() => navigate(-1)} className="cart__back">Назад</div>
                <div className="cart__blockHeader blockHeader">
                    <div className="blockHeader__title">Корзина</div>
                </div>
                {
                    count > 0 ?
                        <>
                            <div className="cart__billing billingBlock">
                                <div className="billingBlock__wrapper">
                                    <div className="billingBlock__title">Вернуться <span><Link to='/shop-page'>в магазин</Link></span></div>
                                    <div className="billingBlock__productsBlock productsBlock">
                                        {
                                            productsBasket?.map((e, i) => (
                                                <BascetElement key={e.name + i} element={e} />
                                            ))
                                        }
                                    </div>
                                </div>
                                <BillingPanel
                                    count={count}
                                    countPosition={countPosition}
                                    totalSumm={totalSumm}
                                    delivery={delivery}
                                    installation={installation}
                                    productsBasket={productsBasket}
                                    TC={TCs}
                                    modal={() => setModal(true)}
                                />
                            </div>
                            <div className="cart__additional">
                                <div className="cart__addServices">
                                    <CheckIcon
                                        value={delivery}
                                        setValue={setDelivery}
                                        href="(подробнее о условиях доставки)"
                                        to='/delivery-page'
                                    >Доставка техники</CheckIcon>
                                    <CheckIcon
                                        value={installation}
                                        setValue={setInstallation}
                                        href="(подробнее о условиях установки)"
                                        to='/service-page'
                                    >Установка прибора</CheckIcon>
                                </div>
                                {/* <div className="cart__technicalBlock technicalBlock">
                                    <div className="technicalBlock__row">
                                        <div className="technicalBlock__icon icon-coment"></div>
                                        <div className="technicalBlock__text">Ввести промокод</div>
                                    </div>
                                    <div className="technicalBlock__row">
                                        <div className="technicalBlock__icon icon-price"></div>
                                        <div className="technicalBlock__text">Добавить коментарий к заказу</div>
                                    </div>
                                </div> */}
                            </div>
                        </>
                        :
                        <div className="cartDefault">Корзина пуста ...</div>
                }
            </div>
            <Modal
                active={modal}
                setactive={setModal}
            >
                <TitleModal style={{ marginBottom: '1.25rem' }} h2 >Пожалуйста проверьте заказ</TitleModal>
                <table>
                    <tbody>
                        <tr className='hr' >
                            <th>Наиментование</th>
                            <th>Колличество</th>
                            <th className='del'>Цена</th>
                            <th className='edn'>Стоимость</th>
                        </tr>
                        {
                            productsBasket.map(e => (
                                <tr key={e.name} >
                                    <td className='nam'>{e.name}</td>
                                    <td>{e.count} шт.</td>
                                    <td className='del'>{e.propertys.price} ₽</td>
                                    <td className='edn' >{e.summ} ₽</td>
                                </tr>
                            ))
                        }
                        {
                            delivery &&
                            <tr>
                                <td></td>
                                <td className='del'></td>
                                <td>Доставка</td>
                                <td className='edn' >400 ₽</td>
                            </tr>
                        }
                        {
                            installation &&
                            <tr>
                                <td></td>
                                <td className='del'></td>
                                <td>Установка</td>
                                <td className='edn'>12600 ₽</td>
                            </tr>
                        }
                        {
                            <tr>
                                <td></td>
                                <td className='del'></td>
                                <td className='sum'>ИТОГО</td>
                                <td className='edn sum sumN' >{TCs || totalSumm} ₽</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <ModalBody
                    h3
                    setCheckValue={setPersonal}
                    checkValue={personal}
                    input={inputArray}
                    onClick={sendMessage}
                />
            </Modal>
        </>

    )
}

export default Bascetpage