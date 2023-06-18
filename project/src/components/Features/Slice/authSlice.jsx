import { createSlice } from "@reduxjs/toolkit";

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
      // Update state with the credentials
      state.userInfo = action.payload;
      
    },
    logout: (state, action) => {
      // Reset state to initial values upon logout
      state.userInfo = null;
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
