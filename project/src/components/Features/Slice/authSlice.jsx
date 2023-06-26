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
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload.role,'Role      llllllllll')
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
      if(action.payload.role  == 'ADMIN'){

        state.AdminInfo = { admin: null };
        Cookies.remove('AdminTokens');

      }else{
        state.userInfo = { name: null };
        Cookies.remove('Tokens');
      state.UserProfile = { profile: null };
      }
      
    },
    setUserProfile: (state, action) => {
      
      state.UserProfile = action.payload
      
    },

  }
});

export const { setCredentials, logout ,setUserProfile} = authSlice.actions;
export default authSlice.reducer;
