
function TotalCountElement({ price, count }) {
    const summ = price * count

    return (
        <div className="productsBlock__summ">₽ {summ}</div>
    )
}

export default TotalCountElement