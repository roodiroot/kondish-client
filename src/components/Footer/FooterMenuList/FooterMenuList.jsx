import React from 'react'
import LinkMenu from '../../Header/LinkMenu'

function FooterMenuList({ links }) {
    return (
        <div className="footer__menu footerMenuList">
            <ul className="footerMenuList__list">
                {
                    links.mobilMenu.map(l =>
                        <LinkMenu key={l.id} className="footerMenuList__link" link={l.link}  >{l.name}</LinkMenu>
                    )
                }
            </ul>
        </div>
    )
}

export default FooterMenuList