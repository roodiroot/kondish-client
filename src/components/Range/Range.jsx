import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './style.scss'

function Range({ name, minPrice, maxPrice, setMaxPrice, setMinPrice }) {
    const onChangeValue = (e) => {
        setMinPrice(e[0])
        setMaxPrice(e[1])
    }
    return (
        <div className="range">
            <label className="selectCastom__label" htmlFor="castomSelect">{name}</label>
            <div className="range__wrapper">
                <RangeSlider
                    onInput={e => onChangeValue(e)}
                    value={[minPrice, maxPrice]}
                    min={1}
                    max={100000} />
                <div className="range__valueBlock">
                    <div className="range__start"><span>{minPrice}</span></div>
                    <div className="range__start"><span>{maxPrice}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Range