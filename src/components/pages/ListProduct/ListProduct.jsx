import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletOneProductAPI } from "../../../http/productAPI";
import { fetchProducts } from "../../../store/reducers/ActionCreators";
import FuncTD from "../../FuncTD/FuncTD";
import Paginator from "../../Paginator/Paginator";
import "./style.scss";

function ListProduct() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [refresh, setRefresh] = useState(false);

  const filters = {
    page,
    limit,
  };

  const dropElement = async (id) => {
    let question = window.confirm(`Удалить элемент ${id} ?`);
    if (question) {
      await deletOneProductAPI(id).then((d) => {
        setRefresh(!refresh);
        console.log(d);
      });
    }
  };

  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [dispatch, page, limit, refresh]);

  console.log(products);
  return (
    <div className="block">
      <table className="block__table">
        <tbody>
          <tr>
            <td></td>
            <td>Название</td>
            <td>Артикул</td>
            <td>Цена</td>
            <td>Инвертор</td>
            <td>HIT</td>
            <td></td>
          </tr>
          {products?.count > 0 &&
            products?.rows.map((l) => (
              <tr key={l.id}>
                <td>{l.id}</td>
                <td>{l.name}</td>
                <td>{l.vendor_code}</td>
                <td>{l.price}</td>
                <td>{l.compressor}</td>
                <td>{l.hit}</td>
                <td>
                  <FuncTD drop={dropElement} id={l.id} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Paginator
        count={products.count}
        page={page}
        setPage={setPage}
        limit={limit}
        classic
      />
    </div>
  );
}

export default ListProduct;
