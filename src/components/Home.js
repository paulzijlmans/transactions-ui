import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Button color="link"><Link to="/transactions">Transactions</Link></Button>
                </Container>
            </div>
        );
    }
}

export default Home;