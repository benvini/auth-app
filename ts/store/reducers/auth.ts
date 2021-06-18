import * as actionTypes from '../actions/actionTypes';
import {SetIsAuthAction, IsAuthState} from '../../types/types';

const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action: SetIsAuthAction) => {
  switch (action.type) {
    case actionTypes.SET_IS_AUTH:
      return setIsAuthenticated(state);
    default:
      return state;
  }
};

const setIsAuthenticated = (state: IsAuthState) => {
  return {...state, isAuth: true};
};

export default authReducer;
