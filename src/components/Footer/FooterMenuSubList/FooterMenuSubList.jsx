import LinkMenu from '../../Header/LinkMenu'

function FooterMenuSubList({ links }) {
    return (
        <div className="footer__rightBlock footerMenuSubList">
            <ul className="footerMenuSubList__list">
                {
                    links.additional.map(l =>
                        <LinkMenu key={l.id} className="footerMenuSubList__link" link={l.link}  >{l.name}</LinkMenu>
                    )
                }
            </ul>
        </div>
    )
}

export default FooterMenuSubList