import { useRef, useState } from 'react'
import ShowList from './ShowList'

function ShowCount({ limit, setLimit }) {
    const [show, setShow] = useState(false)
    const wrapperRef = useRef()
    const arr = [8, 16, 32]
    return (
        <div className="blockHeader">
            <div
                ref={wrapperRef}
                onClick={() => setShow(!show)}
                className="blockHeader__subtitle">Показывать по <span>{limit} шт.</span></div>
            {
                show &&
                <ShowList
                    setLimit={setLimit}
                    arr={arr}
                    show={show}
                    setShow={setShow}
                    wrapperRef={wrapperRef}
                />
            }
        </div>
    )
}

export default ShowCount