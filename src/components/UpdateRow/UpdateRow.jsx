import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { updateProductAPI } from "../../http/productAPI";
import OkIcon from "./OkIcon";
import "./style.scss";

function UpdateRow({ id, value, name }) {
  const [oldValue, setOldValue] = useState("");
  const [desc, setDesc] = useState("");
  const [noreader, setNoReader] = useState(true);

  useEffect(() => {
    setOldValue(value);
  }, []);

  useEffect(() => {
    setDesc(value);
  }, [value]);

  const createDataBase = async () => {
    if (!noreader) {
      if (oldValue !== desc) {
        const gogogo = window.confirm(
          `Меняем значения в поле ${name} на ${desc}??`
        );
        if (gogogo) {
          await updateProductAPI(id, { [name]: desc })
            .then((e) => {
              setNoReader(true);
            })
            .catch((e) => alert(e));
        } else {
          setDesc(oldValue);
          setNoReader(true);
        }
      }
    }
  };

  return (
    <div className="updateRow">
      <input
        onClick={(e) => setNoReader(!noreader)}
        readOnly={noreader ? true : false}
        onChange={(e) => setDesc(e.target.value)}
        type="text"
        value={desc}
      />
      <span>
        <OkIcon onClick={createDataBase} checked={noreader} />
      </span>
    </div>
  );
}

export default UpdateRow;
