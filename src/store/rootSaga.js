import { all } from 'redux-saga/effects';
import { getDataWatcher } from 'ducks/tableOfContent/saga.js';

export default function* rootSaga() {
  yield all([getDataWatcher()]);
}

