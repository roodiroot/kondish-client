import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import { fetchOneArticle } from "../../../store/reducers/ActionCreators";
import Loader from "../../Loader/Loader";
import Picture from "../../Picture/Picture";
import "./style.scss";

function Article() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { article, isLoading } = useSelector((state) => state.articleReducer);

  useEffect(() => {
    dispatch(fetchOneArticle(id));
  }, [dispatch, id]);

  const date = article?.date?.slice(0, 10).split("-").join(".");
  return (
    <div className="articl">
      <div className="articl__back">
        <div
          onClick={() => navigate(-1)}
          className="articl__back1"
          to="/articles-page"
        >
          Назад
        </div>
        <Link className="articl__back2" to="/articles-page">
          вернуться к выбору
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="articl__body">
          <div className="articl__topLIne">
            <div className="articl__text">
              <div className="articl__title">{article?.title}</div>
              <div className="articl__date">{date}</div>
              <div className="articl__description">
                <p className="articl__paragraf">{article?.subtitle}</p>
              </div>
            </div>
            <div className="articl__media">
              {article.img && <Picture folder="articles" img={article?.img} />}
            </div>
          </div>
          <div className="articl__bottomLine">
            <div className="articl__description">
              {article?.text?.split("$").map((p, i) => (
                <p key={i} className="articl__paragraf">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
