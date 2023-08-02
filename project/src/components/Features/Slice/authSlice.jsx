import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  userInfo: {
    name:null
  },
  AdminInfo:{
    admin:null
  },
  UserProfile:{
    profile:null
  },
  PostBalance:{
    Balance:0
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload.role,'Role ')
      // Updating state with the credentials
      if(action.payload.role == 'ADMIN'){

        state.AdminInfo = action.payload.userInfo;

      }else{
        state.userInfo = action.payload.userInfo;
      }
    
      
    },
    logout: (state, action) => {
      // Reset state to initial value
      console.log(action.payload.role,'Role      llllllllll')
      Cookies.remove('UserId')
      if(action.payload.role  == 'ADMIN'){

        state.AdminInfo = { admin: null };
        Cookies.remove('AdminTokens');

      }else{
        state.userInfo = { name: null };
        Cookies.remove('Tokens');
      state.UserProfile = { profile: null };
      state.PostBalance = {Balance:0}
      }
      
    },
    setUserProfile: (state, action) => {
      
      state.UserProfile = action.payload
      
    },

    setPostBalance:(state,action) =>{
       state.PostBalance = action.payload
    }

  }
});

export const { setCredentials, logout ,setUserProfile,setPostBalance} = authSlice.actions;
export default authSlice.reducer;
