import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchArticles } from "../../../store/reducers/ActionCreators";
import ArticleInfo from "../../ArticleInfo/ArticleInfo";
import Loader from "../../Loader/Loader";
import "./style.scss";

function Articlespage() {
  const dispatch = useDispatch();
  const { articles, isLoading } = useSelector((state) => state.articleReducer);
  useEffect(() => {
    dispatch(fetchArticles({ page: 1, limit: 20 }));
  }, [dispatch]);

  return (
    <div className="articles">
      <div className="articles__blockHeader blockHeader">
        <div className="blockHeader__title">Полезные статьи</div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="articles__body">
          {articles?.rows?.map((a) => (
            <ArticleInfo
              key={a.id}
              info={{
                id: a.id,
                img: a.img,
                title: a.title,
                date: a.date,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Articlespage;
