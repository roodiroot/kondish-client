import React from "react";

function DescriptRow({ name, value, si }) {
  return (
    <div className="tableCardItem__row">
      <div className="tableCardItem__key">{name}</div>
      <div className="tableCardItem__meaning">
        {value} {si}
      </div>
    </div>
  );
}

export default DescriptRow;
