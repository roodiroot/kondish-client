import React from 'react'

function RowContacts({ name, value, className }) {
    return (
        <div className={`contacts__infoRow infoRow ${className}`}>
            <div className="infoRow__label big">{name}</div>
            <div className="infoRow__text">{value}</div>
        </div>
    )
}

export default RowContacts