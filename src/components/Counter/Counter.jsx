import classNames from 'classnames'
import './style.scss'

function Counter({ setCount, count, min }) {
    return (
        <div className={classNames(
            "counterItems",
            { min }
        )}>
            <div onClick={() => setCount(count - 1)} className="counterItems__dicriment"></div>
            <div className="counterItems__number">
                {count}
            </div>
            <div onClick={() => setCount(count + 1)} className="counterItems__incriment"></div>
        </div>
    )
}

export default Counter