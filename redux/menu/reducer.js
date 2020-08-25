import constants from "../constants";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: [],
};

const menu = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.menu;
    case constants.MENU_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: [],
      };
    case constants.MENU_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: action.payload,
      };
    case constants.MENU_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        data: [],
      };
    default:
      return {
        ...state,
      };
  }
};
export default menu;
