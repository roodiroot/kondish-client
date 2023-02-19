import React, { useEffect, useRef } from "react";

function SelectList({ setShowList, selectRef, setValue, list }) {
  const listRef = useRef();

  const clickClose = (e) => {
    let n = 0;
    const path = e.composedPath();
    if (!path.includes(listRef.current) && !path.includes(selectRef.current)) {
      setShowList(false);
      document.body.removeEventListener("click", clickClose);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", clickClose);
  });
  return (
    <ul ref={listRef} className="selectCastom__list">
      <li onClick={() => setValue(null)} className="selectCastom__option">
        Показать все
      </li>
      {list.map((li) => (
        <li
          onClick={() => setValue(li)}
          className="selectCastom__option"
          key={li}
        >
          {li}
        </li>
      ))}
    </ul>
  );
}

export default SelectList;
