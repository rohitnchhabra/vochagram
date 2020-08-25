import {takeLatest, all} from 'redux-saga/effects';
import constants from './constants';
import { menuRequest } from './menu/action';

function* watchActions(){
    yield takeLatest(constants.MENU_REQUEST, menuRequest)
}

export default function* rootSaga(){
    yield all([watchActions()])
}