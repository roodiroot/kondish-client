import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { bascetSlice } from '../../../store/reducers/BascetSlice'
import Counter from '../../Counter/Counter'
import Picture from '../../Picture/Picture'
import TotalCountElement from './TotalCountElement'

function BascetElement({ element }) {
    const dispatch = useDispatch()
    const [count, setCount] = useState(element.count)
    if (count < 1) setCount(1)
    if (count > 5) setCount(5)
    useEffect(() => {
        dispatch(bascetSlice.actions.changeCountProduct({
            name: element.name,
            count
        }))
        dispatch(bascetSlice.actions.counterElement())
    }, [count, dispatch, element.name])
    const dropElement = () => {
        dispatch(bascetSlice.actions.deletElement(element.name))
    }

    return (
        <div className="productsBlock__element">
            <div className="productsBlock__main">
                <div className="productsBlock__photo">
                    <Picture folder='products' img={element?.propertys?.img_array[0]} />
                </div>
                <div className="productsBlock__infoBlock">
                    <div className="productsBlock__name">
                        <Link to={`/card-item-page/${element?.propertys.vendor_code}`} >{element?.name}</Link>
                    </div>

                    <div className="productsBlock__description">{element?.propertys?.description}</div>
                    <div className="productsBlock__price">₽ {element?.propertys?.price}</div>
                </div>
            </div>
            <div className="productsBlock__countAndSumm">
                <Counter min setCount={setCount} count={count} />
                <TotalCountElement price={element?.propertys.price} count={count} />
            </div>
            <div onClick={dropElement} className="productsBlock__delete"><span>x</span></div>
        </div>
    )
}

export default BascetElement