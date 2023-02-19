import { useState } from 'react'

import { titleButton } from '../../utils'
import DescForTitle from './DescForTitle'
import TitleButton from './TitleButton'

import './style.scss'


function SliderPyment() {
    const [active, setActive] = useState(0)

    return (
        <div className="billing__slider sliderPyment">
            <div className="sliderPyment__headers">
                {
                    titleButton.map((e, i) => (
                        <TitleButton
                            index={i}
                            active={active}
                            setActive={setActive}
                            key={e.id}
                            icon={e.icon}
                            text={e.title}
                        />
                    ))
                }
            </div>
            <div className="sliderPyment__descrBlock">
                {
                    titleButton.map((e, i) => (
                        <DescForTitle
                            key={e.id}
                            index={i}
                            active={active}
                            text={e.desc}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SliderPyment