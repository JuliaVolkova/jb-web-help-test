import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './pages/App';
import store from 'src/store/index';

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);
