import {
  INITIALSTATE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_PRE,
  LOGIN_UPDATE_SUCCESS,
  DRIVER_UPDATE_SUCCESS,
  SET_USER_TYPE,
  DRIVER_OUT,
} from "../types";

const initialState = {
  isAuthorized: false,
  user: {},
  driver: {
    driverEnabled: false,
  },
  initialState: true,
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case INITIALSTATE:
      return { ...state, initialState: false };
    case LOGIN_SUCCESS:
      return { ...state, isAuthorized: true, user: payload };
    case LOGIN_FAILURE:
      return { ...state, isAuthorized: false, user: null };
    case LOGOUT:
      return { ...state, isAuthorized: false, user: null };
    case REGISTER_PRE:
      return { ...state, user: payload };
    case LOGIN_UPDATE_SUCCESS:
      return { ...state, isAuthorized: true, user: payload };
    case DRIVER_UPDATE_SUCCESS:
      return { ...state, driver: payload };
    case SET_USER_TYPE:
      return { ...state, driver: { ...state.driver, driverEnabled: payload } };
    case DRIVER_OUT:
      return { ...state, driver: null };
    default:
      return state;
  }
}
