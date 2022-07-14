import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const api = axios.create({
    baseURL: "http://127.0.0.1:3333/api",
  });

  api.interceptors.request.use(async (config) => {
    const accessToken = await AsyncStorage.getItem('@token');
  
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  
    return config;
  });



export default api;