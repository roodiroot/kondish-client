import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticles } from "../../../../store/reducers/ActionCreators";
import ArticleCard from "../../../ArticleCard/ArticleCard";
import Loader from "../../../Loader/Loader";

function ArticleBlock() {
  const dispatch = useDispatch();
  const { articles, isLoading } = useSelector((state) => state.articleReducer);
  useEffect(() => {
    dispatch(fetchArticles({ page: 1, limit: 4 }));
  }, [dispatch]);

  return (
    <div className="article">
      <div className="article__blockHeader blockHeader">
        <div className="blockHeader__title">Полезные статьи</div>
        <div className="blockHeader__subtitle">
          Можете посмотреть{" "}
          <Link to="/articles-page">
            <span>все статьи</span>{" "}
          </Link>
          которые помогут вам больше узнать о правильной установке кондиционеров
          и сплит систем
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="article__body">
          {articles?.rows?.map((i) => (
            <ArticleCard
              key={i.id}
              title={i.title}
              description={i.subtitle}
              id={i.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArticleBlock;
