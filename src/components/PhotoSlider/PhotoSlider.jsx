import React from "react";
import { useState } from "react";
import MinImg from "./MinImg";

function PhotoSlider({ imgArray }) {
  const [img, setImg] = useState(0);
  return (
    <div className="mainRowCardItem__mediaBlock">
      <div className="mainRowCardItem__mainImg">
        <picture>
          {imgArray && (
            <>
              <source
                srcSet={`${process.env.REACT_APP_API_URL}/products/${imgArray[img]}.webp`}
                type="image/webp"
              ></source>
              <img
                src={`${process.env.REACT_APP_API_URL}/products/${imgArray[img]}.png`}
                alt="выбраное фото"
              ></img>
            </>
          )}
        </picture>
      </div>
      <div className="mainRowCardItem__previevImgBlock">
        {imgArray?.map((i, n) => (
          <MinImg img={i} key={i} setImg={setImg} num={n} />
        ))}
      </div>
    </div>
  );
}

export default PhotoSlider;
