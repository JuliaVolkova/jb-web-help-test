import { put, takeEvery } from 'redux-saga/effects';
import { GET_DATA, getDataSuccess, getDataError } from './index';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* getDataWorker() {
    try {
        yield delay(1500);
        yield put(getDataSuccess());
    } catch (error) {
        yield put(getDataError(error));
    }
}

export function* getDataWatcher() {
    yield takeEvery(GET_DATA.REQUEST, getDataWorker);
}
