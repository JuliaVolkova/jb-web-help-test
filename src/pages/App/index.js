import {hot} from 'react-hot-loader';
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log('init');
    }

    render() {
        return <div>Hello!</div>
    }
}

export default hot(module)(App);
