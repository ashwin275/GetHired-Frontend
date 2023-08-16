
import axios from "axios";
import Cookies from "js-cookie";
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';


// const  baseURL = "http://127.0.0.1:8000/api/"
const baseURL = "https://www.ebikesforu.shop/api/"




const axiosadminInstance = axios.create({
  baseURL: baseURL,
  headers:{Authorization: `Bearer ${Cookies.get('AdminTokenAccess') ? JSON.parse(Cookies.get('AdminTokenAccess')) : null}`}
});


axiosadminInstance.interceptors.request.use(async req =>{
  if(Cookies.get('AdminTokenAccess')){
   
  
    req.headers.Authorization =  `Bearer ${JSON.parse(Cookies.get('AdminTokenAccess'))}`
         
  }

  const user = jwt_decode(JSON.parse(Cookies.get('AdminTokenAccess')))
  const isExperied = dayjs.unix(user.exp).diff(dayjs()) < 1;
  console.log('expired',isExperied)
  if(!isExperied) return req

  const response = await axios.post(`${baseURL}api/token/refresh/`,{
    refresh:JSON.parse(Cookies.get('AdminTokenRefresh'))
  })

  const AdminTokenAccess = JSON.stringify(response.data.access);
  const AdminTokenRefresh = JSON.stringify(response.data.refresh);
  
  Cookies.set('AdminTokenAccess',AdminTokenAccess)
  Cookies.set('AdminTokenRefresh',AdminTokenRefresh)
  req.headers.Authorization =  `Bearer ${response.data.access}`
  
  return req
})

export default axiosadminInstance;

