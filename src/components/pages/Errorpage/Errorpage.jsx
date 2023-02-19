import Button from '../../Button/Button'
import './style.scss'

function Errorpage() {
    return (
        <div className="error">
            <div className="error__404">
                404
            </div>
            <div className="error__notFound">Этой страницы пока не существует</div>
            <div className="error__button">
                <Button to='/' type='sm'>На главную</Button>
            </div>
        </div>
    )
}

export default Errorpage