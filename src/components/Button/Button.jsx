import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

import './style.scss'

function Button({ className, type, children, to, onClick }) {
    className = className || null
    const navigate = useNavigate()
    const action = () => {
        if (to) return navigate(to)
        if (onClick) return onClick()
        console.log('На кнопке нет действия')
    }

    if (type === 'sm') return <div onClick={action} className={classNames('buttonMainSmall')}>{children}</div>
    if (type === 'bg' || !type) return <div onClick={action} className="buttonMain">{children}</div>
    if (type === 'nbg') return <div onClick={action} className="buttonMain noBg">{children}</div>
    if (type === 'nbt') return <div onClick={action} className="buttonMainText">{children}</div>
}

export default Button