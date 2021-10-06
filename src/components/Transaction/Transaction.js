const Transaction = ({ date, description, amount, comment, category }) => {
    return (
        <div className="container grid">
            <div>{date}</div>
            <div>{description}</div>
            <div>{amount}</div>
            <div>{comment}</div>
            <div>{category}</div>
        </div>
    )
}

export default Transaction;