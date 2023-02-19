import './style.scss'
import imgp from '../../../assets/img/about/image.png'
import imgw from '../../../assets/img/about/image.webp'
import ReviewsBlock from '../Main/components/ReviewsBlock'
import SocialBlock from '../../SocialBlock/SocialBlock'
import BackBatton from '../../BackBatton/BackBatton'

function Aboutpage() {
    return (
        <>
            <div className="about">
                <BackBatton />
                <div className="about__blockHeader blockHeader">
                    <div className="blockHeader__title">О компании</div>
                </div>
                <div className="about__body">
                    <div className="about__textBlock">
                        <div className="about__text">
                            <p>Мы делаем все возможное, что каждый, кто желает стать полноправным хозяином климата
                                в своем доме или на работе, смог приобрести все необходимое по выгодным ценам.
                                Сотрудничество с ведущими мировыми производителями климатической техники позволяет
                                нам поддерживать большой ассортимент</p>
                            <p>Более 10 лет компания успешно развивается на рынке климатических систем</p>
                            <p>Одним из основных условий безотказной и продолжительной работы кондиционера является
                                его высококвалифицированный монтаж. Именно мастерство, навыки и честность монтажников
                                кондиционера во многом играют итоговую роль в его последующей эксплуатации</p>
                        </div>
                        <div className="about__social">
                            <SocialBlock type='FOOTER' dz vk />
                        </div>
                    </div>
                    <div className="about__mediaBlock">
                        <picture>
                            <source srcSet={imgw} type="image/webp"></source>
                            <img src={imgp} alt="фото"></img>
                        </picture>
                    </div>
                </div>
            </div>
            <ReviewsBlock />
        </>


    )
}

export default Aboutpage