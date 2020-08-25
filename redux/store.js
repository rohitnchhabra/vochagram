import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducer";
import sagas from "./sagas";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

export const store = (context) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));

  store.sagaTask = sagaMiddleware.run(sagas);
  
  return store;
};

export const wrapper = createWrapper(store, { debug: true });
