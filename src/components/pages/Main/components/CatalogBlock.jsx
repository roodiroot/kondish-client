import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchHITProducts } from "../../../../store/reducers/ActionCreators";
import Button from "../../../Button/Button";
import Loader from "../../../Loader/Loader";
import SkyCard from "../../../SkyCard/SkyCard";

function CatalogBlock({ title }) {
  const dispatch = useDispatch();
  const { hitproducts, isLoading } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    dispatch(
      fetchHITProducts({
        page: 1,
        limit: 4,
        hit: true,
      })
    );
  }, []);

  return (
    <div className="catalog">
      <div className="catalog__blockHeader blockHeader">
        <div className="blockHeader__title">{title}</div>
        <div className="blockHeader__subtitle">
          {" "}
          <Link to="/shop-page">
            <span>Перейти в магазин</span>
          </Link>
        </div>
      </div>
      <div className="catalog__body">
        {isLoading ? (
          <Loader />
        ) : (
          hitproducts?.rows?.map((i) => <SkyCard element={i} key={i.id} />)
        )}
      </div>
      <div className="catalog__button">
        <Button to="/shop-page" type="sm">
          Каталог товаров
        </Button>
      </div>
    </div>
  );
}

export default CatalogBlock;
