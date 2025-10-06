import axios from "axios";
import { refreshAccessToken } from "./auth";
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "",
  headers: { "Content-Type": "application/json" },
  withCredentials:true,//allow cookies to be sent automatically
});


// Attach token from cookies before every request
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('access_token'); // instead of localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


//handle token refresh if 401
api.interceptors.response.use((response)=>response,
async (error)=>{
    const originalRequest = error.config;

    //if unauthorized & not already retried
    if(error.response?.status===401 && !originalRequest._retry){
        originalRequest._retry = true;
        try{
            //trying to refresh the access token
            const newToken = await refreshAccessToken();

            //save the new token
            Cookies.set('accessToken',newToken,{path:'/',sameSite:'lax'});

            //update the header and retry the original request
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return api(originalRequest);
        }catch(refreshError){
            console.error('Token refresh failed');
            Cookies.remove('access_token');
            Cookies.remove('refresh_token');
            window.location.href = '/login'
        }
    }
    return Promise.reject(error);
});

export default api;