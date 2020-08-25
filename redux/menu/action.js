import * as actions from "../actions";
import axiosCall from "../../services";
import { call, put } from "redux-saga/effects";

export function* menuRequest(action) {
  try {
    const response = yield call(
      axiosCall,
      "GET",
      '/home/categories',
      ""
    );
      console.log(response.data.data);
      
    if (response) {
      yield put(actions.menuSuccess(response.data.data));
    }
  } catch (e) {
    console.log(e);
    yield put(actions.menuError());
  }
}
