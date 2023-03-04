import React from "react";

function RowContacts({ name, value, className, tel }) {
  return (
    <div className={`contacts__infoRow infoRow ${className}`}>
      <div className="infoRow__label big">{name}</div>
      <div className="infoRow__text">
        {tel ? <a href="tel:89153294209">{value}</a> : value}
      </div>
    </div>
  );
}

export default RowContacts;
