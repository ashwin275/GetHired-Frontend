import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  userInfo: {
    name:null
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      // Updating state with the credentials
      state.userInfo = action.payload;
      
    },
    logout: (state, action) => {
      // Reset state to initial value
      state.userInfo = null;
      Cookies.remove('Tokens');
      
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
