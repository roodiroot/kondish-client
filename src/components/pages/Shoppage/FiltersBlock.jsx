import React from 'react'
import Button from '../../Button/Button'
import Range from '../../Range/Range'
import Select from '../../Select/Select'

function FiltersBlock({ props, setSp, sp }) {
    const reset = () => {
        props.showAll()
        setSp(!sp)
    }
    return (
        <>
            <div className="filters__block">
                <Range
                    minPrice={props.minPrice}
                    maxPrice={props.maxPrice}
                    setMinPrice={props.setMinPrice}
                    setMaxPrice={props.setMaxPrice}
                    name='Диапазон цен ₽' />
                <Select
                    list={props.brandsList}
                    name='Бренд'
                    value={props.brand}
                    setValue={props.setBrand} />
                <Select list={props.SesList} name='Площадь помещения' value={props.S} setValue={props.setS} />
                <Select name='Wi-Fi' list={props.wifiLIst} value={props.WiFi} setValue={props.setWiFi} />
                {/* <Select name='Страна бренда' />
        <Select name='Страна производитель' />
        <Select name='Площадь помещения' />
        <Select name='Уровень шума' />
        <Select name='Цвет' />
        <Select name='Wi-Fi' />
        <Select name='Макс. длина трубы, м' /> */}
            </div>
            <div className="filters__buttons">
                <Button onClick={props.showProducts} >Найти</Button>
                <Button type='nbt' onClick={reset} >Сбросить</Button>
            </div>
        </>
    )
}

export default FiltersBlock