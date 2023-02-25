import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { sendMessageAPI } from '../../../http/sendMessageAPI'
import Modal from '../../Modal/Modal'
import ModalBody from '../../Modal/ModalBody'
import PhoneBlock from '../../PhoneBlock/PhoneBlock'
import ArticleBlock from './components/ArticleBlock'
import BrandsSlider from './components/BrandsSlider'
import CatalogBlock from './components/CatalogBlock'
import FeedbackBlock from './components/FeedbackBlock'
import MainBlock from './components/MainBlock'
import ReviewsBlock from './components/ReviewsBlock'
import './style.scss'

function Mainpage() {
    const { pathname } = useLocation()
    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [personal, setPersonal] = useState(false)

    const inputArray = [
        { name: 'Имя*', func: [name, setName] },
        { name: 'Номер телефона*', func: [number, setNumber] }
    ]
    const sendMessage = () => {
        if (name === '' || name.length < 3 || name.length > 19) return alert('Введите корректоное Имя')
        if (number.length < 17 || number.length > 18) return alert('Введите корректоный номер телефона')
        if (personal === false) return alert('Вы должны согласиться с политикой по обработке персональных данных')
        const TOTAL = `Обратная связь с сайта Имя: ${name} Номер телефона: ${number} отправлено со страницы ${pathname === '/' ? 'Главной' : pathname}`
        sendMessageAPI(TOTAL).then(d => console.log(d))
        setName('')
        setNumber('+7')
        setPersonal(false)
        setModal(false)
    }

    return (
        <>
            <PhoneBlock />
            <MainBlock click={e => setModal(true)} />
            <ReviewsBlock />
            <CatalogBlock title='Каталог товаров' />
            <ArticleBlock />
            <BrandsSlider />
            <FeedbackBlock />
            <Modal
                active={modal}
                setactive={setModal}
            >
                <ModalBody
                    h2
                    setCheckValue={setPersonal}
                    checkValue={personal}
                    input={inputArray}
                    onClick={sendMessage}
                />
            </Modal>
        </>
    )
}

export default Mainpage