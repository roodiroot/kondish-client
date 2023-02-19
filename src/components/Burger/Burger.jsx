import classNames from "classnames"

import './style.scss'

function Burger({ setActiveMobilMenu, activeMobilMenu }) {
    return (
        <div onClick={() => setActiveMobilMenu(!activeMobilMenu)}
            className={classNames('header__burger', 'burger', activeMobilMenu && 'active')}>
            <span></span>
        </div>
    )
}

export default Burger