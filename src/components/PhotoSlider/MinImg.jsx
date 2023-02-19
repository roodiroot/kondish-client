import React from 'react'

function MinImg({ img, setImg, num }) {
    // http://localhost:3001/products/${oneProduct?.img_array[0]}.webp
    return (
        <div onClick={() => setImg(num)} className="mainRowCardItem__previevImg">
            <picture>
                <source srcSet={`${process.env.REACT_APP_API_URL}/products/${img}.min.webp`} type="image/webp"></source>
                <img src={`${process.env.REACT_APP_API_URL}/products/${img}.min.png`} alt="кондиционер"></img>
            </picture>
        </div>
    )
}

export default MinImg