import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class TransactionOverview extends Component {
    constructor(props) {
        super(props);
        this.state = { transactions: [] };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/transactions')
            .then(response => response.json())
            .then(data => this.setState({ transactions: data }));
    }

    async remove(id) {
        await fetch(`/transactions/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedTransactions = [...this.state.transactions].filter(transaction => transaction.id !== id);
            this.setState({ transactions: updatedTransactions });
        });
    }

    render() {
        const { transactions } = this.state;

        const transactionOverview = transactions.map(transaction => {
            return <tr key={transaction.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.comment}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/transactions/" + transaction.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(transaction.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/transactions/new">Add Transaction</Button>
                    </div>
                    <h3>Transactions</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Date</th>
                                <th width="30%">Description</th>
                                <th width="20%">Amount</th>
                                <th width="30%">Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionOverview}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default TransactionOverview;