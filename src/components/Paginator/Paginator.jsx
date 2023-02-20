import classNames from "classnames";

import SVGCombine from "../SVG/SVGCombine/SVGCombine";
import "./style.scss";

function Paginator({ count, page, setPage, limit, classic }) {
  const arr = [];
  const c = Math.ceil(count / limit);
  for (let i = 0; i < c; i++) {
    arr.push(i + 1);
  }

  const bascPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const prewPage = () => {
    if (page < arr.length) {
      setPage(page + 1);
    }
  };
  let firstPage = false;
  let lastPage = false;
  let paginArr = [];
  if (arr.length >= 6) {
    if (page >= 3 && page <= arr.length - 2) {
      paginArr = arr.slice(page - 2, page + 1);
      firstPage = false;
      lastPage = false;
    }
    if (page > 0 && page < 3) {
      paginArr = arr.slice(0, 3);
      firstPage = true;
    }
    if (page > arr.length - 2) {
      paginArr = arr.slice(arr.length - 3, arr.length);
      lastPage = true;
    }
  } else {
    firstPage = true;
    lastPage = true;
    paginArr = arr;
  }

  return (
    <div className="paginator__wrapper">
      <ul className="paginator__list">
        <li
          onClick={bascPage}
          className={classNames("arrowPagination back", { classic })}
        >
          <SVGCombine leftArr />
        </li>
        {!firstPage && (
          <>
            <li
              className={classNames("paginator__link", page === 1 && "active", {
                classic,
              })}
              onClick={(e) => setPage(1)}
            >
              <span>{1}</span>
            </li>
            <span className={classNames("dotdotdot", { classic })}>...</span>
          </>
        )}
        {paginArr.map((i, index) => (
          <li
            key={`${i}_${index}`}
            className={classNames("paginator__link", page === i && "active", {
              classic,
            })}
            onClick={(e) => setPage(i)}
          >
            <span>{i}</span>
          </li>
        ))}
        {!lastPage && (
          <>
            <span className={classNames("dotdotdot", { classic })}>...</span>
            <li
              className={classNames(
                "paginator__link",
                page === arr.length && "active",
                { classic }
              )}
              onClick={(e) => setPage(arr.length)}
            >
              <span>{arr.length}</span>
            </li>
          </>
        )}
        <li
          onClick={prewPage}
          className={classNames("arrowPagination prev", { classic })}
        >
          <SVGCombine rightArr />
        </li>
      </ul>
    </div>
  );
}

export default Paginator;
