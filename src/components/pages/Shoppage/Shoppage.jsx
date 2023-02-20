import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../../store/reducers/ActionCreators";
import { brandsList, SesList, wifiLIst, compressorLIst } from "../../../utils";
import Card from "../../Card/Card";
import Paginator from "../../Paginator/Paginator";
import FiltersBlock from "./FiltersBlock";
import ShowCount from "./ShowCount";
import CatalogBlock from "../Main/components/CatalogBlock";

import "./style.scss";
import Loader from "../../Loader/Loader";

function Shoppage() {
  const [brand, setBrand] = useState(null);
  const [S, setS] = useState(null);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [WiFi, setWiFi] = useState(null);

  const [hit, setHit] = useState(null);
  const [external, setExternal] = useState(null);
  const [compressor, setCompressor] = useState(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  const [sp, setSp] = useState(false);

  const filters = {
    page,
    limit,
    brand,
    S,
    WiFi,
    hit,
    external,
    compressor,
    minPrice,
    maxPrice,
  };

  const dispatch = useDispatch();
  const { products, reject, error, isLoading } = useSelector(
    (state) => state.productReducer
  );
  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [dispatch, page, sp, limit]);
  const showProducts = () => {
    setPage(1);
    filters.page = 1;
    dispatch(fetchProducts(filters));
  };
  const showAll = () => {
    setBrand(null);
    setS(null);
    setMinPrice(1);
    setMaxPrice(100000);
    setWiFi(null);
    setHit(null);
    setExternal(null);
    setCompressor(null);
  };
  const props = {
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    brandsList,
    brand,
    setBrand,
    SesList,
    S,
    setS,
    wifiLIst,
    WiFi,
    setWiFi,
    hit,
    setHit,
    compressor,
    setCompressor,
    external,
    setExternal,
    compressorLIst,
    showProducts,
    showAll,
  };

  return (
    <>
      <div className="filters">
        <FiltersBlock props={props} setSp={setSp} sp={sp} />
      </div>
      <div className="shop">
        {isLoading ? (
          <Loader />
        ) : reject ? (
          <div>{error}</div>
        ) : (
          <>
            <ShowCount setLimit={setLimit} limit={limit} />
            <div className="shop__body">
              <div className="shop__wrapper">
                {products?.rows?.map((i) => (
                  <Card key={i.id} element={i} />
                ))}
              </div>
            </div>
            <Paginator
              count={products.count}
              page={page}
              setPage={setPage}
              limit={limit}
            />
          </>
        )}
      </div>
      <CatalogBlock title="Часто выбирают" />
    </>
  );
}

export default Shoppage;
