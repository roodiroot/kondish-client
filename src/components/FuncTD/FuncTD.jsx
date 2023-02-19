import React from "react";
import { deletOneProductAPI } from "../../http/productAPI";
import SVGCombine from "../SVG/SVGCombine/SVGCombine";

function FuncTD({ id, drop }) {
  return (
    <div>
      <span onClick={() => drop(id)} style={{ cursor: "pointer" }}>
        <SVGCombine yrna />
      </span>
    </div>
  );
}

export default FuncTD;
