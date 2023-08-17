
import axios from "axios";
import Cookies from "js-cookie";
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';



// const baseURL = "https://www.ebikesforu.shop/api/"
const  baseURL = "http://127.0.0.1:8000/api/"




const axiosInstance = axios.create({
  baseURL: baseURL,
  headers:{Authorization: `Bearer ${Cookies.get("AccessToken")?JSON.parse(Cookies.get("AccessToken")):null}`}
});


axiosInstance.interceptors.request.use(async req =>{
  if(Cookies.get("AccessToken")){
   

    
    req.headers.Authorization =  `Bearer ${JSON.parse(Cookies.get("AccessToken"))}`
         
  }

  const user = jwt_decode(JSON.parse(Cookies.get("AccessToken")))
  console.log('User',user)
  const isExperied = dayjs.unix(user.exp).diff(dayjs()) < 1;
  console.log('expired',isExperied)
  if(!isExperied) return req

  const response = await axios.post(`${baseURL}api/token/refresh/`,{
    refresh:JSON.parse(Cookies.get("RefreshToken"))
  })

  const accessTokenString = JSON.stringify(response.data.access);
  const refreshTokenString = JSON.stringify(response.data.refresh);
  
  Cookies.set('AccessToken',accessTokenString)
  Cookies.set('RefreshToken',refreshTokenString)
  req.headers.Authorization =  `Bearer ${response.data.access}`
  
  return req
})

export default axiosInstance;

