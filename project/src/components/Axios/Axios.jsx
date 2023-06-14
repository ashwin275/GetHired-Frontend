import axios from "axios";


const baseURL = "http://127.0.0.1:8000/api/"


const axiosinstance = axios.create({
    baseURL:baseURL,
   
  });

  export default axiosinstance