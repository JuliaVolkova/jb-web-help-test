import { hot } from 'react-hot-loader';
import React, { Component, Fragment } from 'react';
import Header from 'components/Header';
import TableOfContentContainer from 'containers/TableOfContentContainer';

import 'static/index.sass';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log('init');
    }

    render() {
        return <Fragment>
            <Header/>
            <TableOfContentContainer/>
        </Fragment>;
    }
}

export default hot(module)(App);
