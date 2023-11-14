import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const httpClient = axios.create({ timeout: 2 * 60 * 1000 });
httpClient.defaults.timeout = 10000;

// export const fetchApi = async (url, data) => {
//   try {
//     const response = await httpClient.post(url, data)
//     if (response.status == '200') {
//       return response.data;
//     }
//   } catch (error) {
//     if (error.response.status != '200') {
//       return {
//         error: error.response
//       };
//     }
//   }
// };

export const fetchApi = async (url, data) => {
    console.log('url,data :>> ', url,data);

  const value = await AsyncStorage.getItem('userData')
  const jsonData=JSON.parse(value)
  const reqData= value!=undefined ? {...data, token:jsonData.access_token} : data
  console.log('reqData :>> ', reqData);
  try {

    const response = await httpClient.post(url, reqData)

    if (response.status == '200' || response.status == '201') {
      return response.data;
    }

  } catch (error) {
    if(error.response==undefined){
      const error={
        data:{
        message:"Unable to reach the servers. Check if your internet connection is stable"
        }
      }
      return {
        error: error
      };
    }else{
      return {
        error: error.response
      };
    }
  }
};

export const fetchGetApi = async (url, data) => {
  const value = await AsyncStorage.getItem('userData')
  const jsonData=JSON.parse(value)
    try {
      const response = await httpClient.get(url, {params:{
        ...data,
        token:jsonData.access_token,
      }})

      if (response.status == '200') {
        return response.data;
      }
    } catch (error) {
      if (error.response.status != '200') {
        return {
          error: error.response
        };
      }
    }
  };
