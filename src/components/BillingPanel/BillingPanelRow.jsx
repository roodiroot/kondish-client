import React from 'react'

function BillingPanelRow({ children, si, value, style }) {
    return (
        <div style={style} className="billingBlock__payRow">
            <div className="billingBlock__key">{children}</div>
            <div className="billingBlock__meaning">{si} {value}</div>
        </div>
    )
}

export default BillingPanelRow