import { Link } from "react-router-dom";
import Picture from "../Picture/Picture";

import "./style.scss";

function ArticleInfo({ info }) {
  const date = info?.date?.slice(0, 10).split("-").join(".");
  return (
    <div className="articles__element elementArticle">
      <div className="elementArticle__image">
        <Picture folder="articles" img={info.img} />
      </div>
      <div className="elementArticle__date">{date}</div>
      <div className="elementArticle__textBlock">
        <div className="elementArticle__title">{info?.title}</div>
        <div className="elementArticle__add">
          <Link to={`/article-page/${info.id}`}>читать статью...</Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleInfo;
