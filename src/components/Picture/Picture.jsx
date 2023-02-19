import classNames from "classnames";

import "./style.scss";

function Picture({ folder, img, external }) {
  return (
    <picture className={classNames("picture", { external })}>
      <source
        srcSet={`${process.env.REACT_APP_API_URL}/${folder}/${img}.webp`}
        type="image/webp"
      />
      <img
        src={`${process.env.REACT_APP_API_URL}/${folder}/${img}.png`}
        alt="фото проекта"
      />
    </picture>
  );
}

export default Picture;
