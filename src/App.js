import './App.css';
import { Component } from 'react';
import TransactionOverview from './components/TransactionOverview/TransactionOverview';
import AddTransaction from './components/AddTransaction/AddTransaction';

const initialState = {
  transactions: [],
  displayAdd: false,
  input: null
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  fetchData = () => {
    fetch('http://localhost:9000/api/v1/transactions')
    .then(response => response.json())
    .then(transactions => this.setState({ transactions: transactions }))
    .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchData();
  }

  onButtonSubmit = () => {
    this.setState({ displayAdd: true });
  }

  onAddTransaction = (transaction) => {
    console.log(transaction);
    fetch('http://localhost:9000/api/v1/transactions', {
      method: 'post',
      headers: {' Content-Type': ' application/json'},
      body: JSON.stringify({
      })
    })
    .then(this.setState({displayAdd:false}))
    .then(this.fetchData())
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>Transactions</h1>
        <TransactionOverview transactions={this.state.transactions} />
        <button onClick={this.onButtonSubmit}>Add</button>
        {this.state.displayAdd ? <AddTransaction onAddTransaction={this.onAddTransaction}/> : <div></div>}
      </div>
    );
  }
}

export default App;
