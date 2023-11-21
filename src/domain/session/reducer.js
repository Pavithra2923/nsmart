import {
    LOGIN,
    LOGIN_ERROR,
    IN_PROGRESS,
    LOGOUT,
    LOG_ERROR,
    SET_LANGUAGE,
  } from './actionTypes';
  const INITIAL_STATE = {
    loggedIn: false,
    loggingIn: false,
    userToken: null,
    logginError: '',
    userInfo: '',
    error: '',
    country_code:'',
    currency_code:'',
    lang_json:null,
    defLang:null,
    loggedOut:false,
    token:""
  };
  import AsyncStorage from '@react-native-community/async-storage';
import { logout } from './actions';
  export const sessionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case IN_PROGRESS:
        return {
          ...state,
          loggingIn: true,
        };
      case LOGIN:
        return {
          ...state,
          loggedIn: true,
          loggingIn: false,
          logout:false,
          userToken: Math.floor(Math.random() * 100) + 1,
          userInfo: action.payload,
          // country_code:action.payload.user.market.country_code,
          // currency_code:action.payload.user.market.currency_code,
        };
      case LOG_ERROR:
        AsyncStorage.removeItem('userData')
        AsyncStorage.removeItem('appUrl')
        AsyncStorage.removeItem('today')
        return {
          ...state,
          userToken:null,
          loggedIn: false,
          loggingIn:false,
          error: action.payload.error.data.message,
        };
        case SET_LANGUAGE:
            return{
                ...INITIAL_STATE,
                lang_json:action.payload,
                defLang:action.defLang
            };
       
      case LOGOUT:
        return {
          ...INITIAL_STATE,
          loggedOut:true,
          token:Math.floor(Math.random() * 100) + 1,
        };

      case LOGIN_ERROR:
          return {
            ...INITIAL_STATE,
            logginError: action.payload.message,
          };
 
      default:
        return state;
    }
  };
