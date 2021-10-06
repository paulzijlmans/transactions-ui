import './TransactionOverview.css';
import Transaction from "../Transaction/Transaction";

const TransactionList = ({ transactions }) => {
    return (
        <div>
            <div className="container grid bold">
            <div>Date</div>
            <div>description</div>
            <div>amount</div>
            <div>comment</div>
            <div>category</div>
        </div>
            {
                transactions.map((transaction) => {
                    return (
                        <Transaction
                            date={transaction.date}
                            description={transaction.description}
                            amount={transaction.amount}
                            comment={transaction.comment}
                        />
                    )
                })
            }
        </div>
    )
}

export default TransactionList;