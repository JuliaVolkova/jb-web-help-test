import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './rootReducer';
import rootSaga from './rootSaga';

const logger = createLogger({
    collapsed: true
});

const composeEnhancers = process.env.NODE_ENV === 'production'
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const middleware = process.env.NODE_ENV === 'production'
    ? applyMiddleware(sagaMiddleware)
    : applyMiddleware(sagaMiddleware, logger);
const store = createStore(reducers, {}, composeEnhancers(middleware));

export default store;
sagaMiddleware.run(rootSaga);
