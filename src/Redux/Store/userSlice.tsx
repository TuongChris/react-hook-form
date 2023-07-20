import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  password: string;
  isLoggedIn: boolean;
  error: string | null;
}

const initialState: UserState = {
  email: "",
  password: "",
  isLoggedIn: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    loginSuccess: (state) => {
      state.isLoggedIn = true;
      state.error = null;
    },
  },
});

export const { setUser, loginSuccess } = userSlice.actions;

export default userSlice.reducer;
