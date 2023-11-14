import { config } from '../../../config';
import { fetchApi } from '../../common/utils/Api';
import { LOGIN, LOGIN_ERROR, IN_PROGRESS, LOGOUT, ERROR, OTP, OTP_ERROR, LOGIN_OTP_ERROR, LOG_ERROR } from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';


export const login = (data) => {
  return async (dispatch) => {
    dispatch({
      type: IN_PROGRESS,
    });

    const response = await fetchApi(config.HOST_NAME + 'user/login', data, 'login');
    if (response.error == undefined) {
      if (response.status == 'success') {
        await AsyncStorage.setItem('userToken', 'dummyToken')
        const getItem = await AsyncStorage.getItem('userData')
        const getHostName = await AsyncStorage.getItem('appUrl')
        const getToday = await AsyncStorage.getItem('today')
        if (getItem == null && getHostName == null && getToday != JSON.stringify(new Date().getDate())) {
          const jsonValue = JSON.stringify(response.data)
          const today = JSON.stringify(new Date().getDate())
          await AsyncStorage.setItem('userData', jsonValue)
          await AsyncStorage.setItem('appUrl', config.HOST_NAME)
          await AsyncStorage.setItem('today', today)
        }
        const user_name = JSON.stringify(response.data.user_name)
        // crashlytics().log('User Logged in.');
        // await Promise.all([
        //   crashlytics().setUserId(data.email),
        //   crashlytics().setAttribute('credits', String(user_name)),
        // ]);


        dispatch({
          type: LOGIN,
          payload: response.data,
        });
      }
    } else {
      alert("logeor")
      dispatch({
        type: LOG_ERROR,
        payload: response
      });
    }
  };
};

export const logout = () => {
  AsyncStorage.removeItem('userData')
  AsyncStorage.removeItem('appUrl')
  AsyncStorage.removeItem('userToken')
  AsyncStorage.removeItem('today')
  return {
    type: LOGOUT,

  };
};
