import classNames from 'classnames'
import { useEffect, useRef } from 'react'

function ShowList({
    setLimit,
    arr,
    show,
    setShow,
    wrapperRef
}) {
    const listRef = useRef()
    useEffect(() => {
        document.body.addEventListener('click', clicOutList)
    }, [])
    const clicOutList = (e) => {
        const path = e.composedPath()
        if (!path.includes(listRef.current) && !path.includes(wrapperRef.current)) {
            document.body.removeEventListener('click', clicOutList)
            setShow(false)
        }
    }
    const activeLimit = (i) => {
        setLimit(i)
        setShow(false)
    }
    return (
        <ul
            ref={listRef}
            className={
                classNames(
                    "blockHeader__countList",
                    show && "active"
                )
            }>
            {
                arr.map(i => (
                    <li
                        key={i}
                        className="blockHeader__countlink"
                        onClick={() => activeLimit(i)}
                    >{i} шт.</li>
                ))
            }
        </ul>
    )
}

export default ShowList