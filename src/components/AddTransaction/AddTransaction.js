const AddTransaction = ({onAddTransaction}) => {
    return (
        <div>
            <div className="container grid">
                <input name="date" />
                <input name="description" />
                <input name="amount" />
                <input name="comment" />
                <input name="category" />
            </div>
            <button onClick={onAddTransaction}>Save</button>
        </div>
    )
}

export default AddTransaction;