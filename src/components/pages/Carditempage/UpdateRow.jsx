import React, { useState } from "react";
import { updateProductAPI } from "../../../http/productAPI";
import SaveIcon from "../../SVG/SaveIcon/SaveIcon";

function UpdateRow({ name, id, bool, value, children }) {
  const [val, setVal] = useState("");
  bool = bool || false;

  const saveInfo = () => {
    if (val === "") {
      return updateProductAPI(id, { [name]: value }).then((e) =>
        console.log(e[0])
      );
    }
    updateProductAPI(id, { [name]: val }).then((e) => console.log(e[0]));
  };
  if (bool) {
    return (
      <div className="mainRowCardItem__updaterow">
        <div className="INPUTSave">
          <input
            onChange={(e) => setVal(e.target.value)}
            placeholder={value}
            type="text"
            value={val}
          />
        </div>
        <div onClick={saveInfo} className="iconSave">
          <SaveIcon />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default UpdateRow;
