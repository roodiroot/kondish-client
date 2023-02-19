import { useRef, useState } from 'react'
import SelectList from './SelectList'
import './style.scss'

function Select({ name, list, value, setValue }) {

    const [showList, setShowList] = useState(false)
    const selectRef = useRef()

    const showAddList = () => {
        setShowList(!showList)
    }

    const clickLi = (v) => {
        setValue(v)
        setShowList(false)
    }

    return (
        <div className="filters__select selectCastom">
            <label className="selectCastom__label" htmlFor="castomSelect">{name}</label>
            <div className="selectCastom__wrapper">
                <div
                    ref={selectRef}
                    onClick={showAddList}
                    id="castomSelect"
                    className="selectCastom__select">
                    {!value ? 'Показать все' : value}
                </div>
                {
                    showList &&
                    <SelectList selectRef={selectRef} setShowList={setShowList} setValue={clickLi} list={list} />
                }
            </div>
        </div>
    )
}

export default Select