import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './views/nav';
import getRouter from './router';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            <Router>
                <Nav />
                {getRouter()}
            </Router></div>
        )
    }
}



export default App;