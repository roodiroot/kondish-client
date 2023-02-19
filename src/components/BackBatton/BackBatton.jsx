import { Link, useNavigate } from 'react-router-dom'

import './style.scss'

function BackBatton({ sub, row }) {
    const navigate = useNavigate()

    return (
        <div className={`backbutton ${row && 'row'}`}>
            <div className="cardItem__topRow"><div onClick={() => navigate(-1)} className="cardItem__allProduct">Назад</div></div>
            {
                sub &&
                <div className="cardItem__topRow"><Link to='/shop-page' className="cardItem__back"><span>{sub}</span></Link></div>
            }

        </div>
    )
}

export default BackBatton