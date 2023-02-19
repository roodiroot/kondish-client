import classNames from 'classnames'
import { Link } from 'react-router-dom'

import './style.scss'

function CheckIcon({ children, href, value, setValue, to }) {

    return (
        <div className="serviceBlock">
            <div onClick={() => setValue(!value)} className={classNames('serviceBlock__checked', 'icon-000000', value && 'check')}></div>
            <div className="serviceBlock__text">{children}
                {
                    to ?
                        <Link to={to}><span>{href}</span></Link>
                        :
                        <span>{href}</span>
                }
            </div>
        </div>
    )
}

export default CheckIcon