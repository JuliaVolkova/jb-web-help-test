import {put, call, takeEvery} from 'redux-saga/effects';
import {GET_DATA, getDataSuccess, getDataError} from './index';
import {getData} from './api';

export function* getDataWorker() {
    try {
        const data = yield call(getData);
        yield put(getDataSuccess(data));
    } catch (error) {
        yield put(getDataError(error));
    }
}

export function* getDataWatcher() {
    yield takeEvery(GET_DATA.REQUEST, getDataWorker);
}
