import constants from "./constants";

export function menuRequest(payload) {
  return {
    type: constants.MENU_REQUEST,
    payload,
  };
}

export function menuSuccess(payload) {
  return {
    type: constants.MENU_SUCCESS,
    payload,
  };
}

export function menuError(payload) {
  return {
    type: constants.MENU_ERROR,
    payload,
  };
}
