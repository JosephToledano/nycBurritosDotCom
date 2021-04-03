import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type username = {
  username: string;
};

type password = {
  password: string;
};

interface credentials {
  username: string;
  password: string;
}

interface initialUserState {
  currentUser: string;
  loading: boolean;
  isLoggedIn: boolean;
  currentUserId: number;
  failedLogin: boolean;
}
// First, create the thunk
const login = createAsyncThunk("login/", async (info: credentials) => {
  return fetch("login", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify({
      username: info.username,
      password: info.password,
    }),
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
});

const signUp = createAsyncThunk("signUp/", async (info: credentials) => {
  return fetch("signUp", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify({
      username: info.username,
      password: info.password,
    }),
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
});

const initialState: any = {
  currentUser: "",
  isLoggedIn: false,
  loading: false,
  currentUserId: -1,
  failedLogin: false,
  // isError: false,
  // errorMessage: "",
};

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action: PayloadAction<any>) => {
      // Add user to the state array
      state.loading = true;
    }),
      builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        // Add user to the state array
        if (action.payload.username) {
          console.log(action.payload);
          state.currentUser = action.payload.username;
          state.isLoggedIn = true;
          state.currentUserId = action.payload.user_id;
          state.failedLogin = false;
        }
      }),
      builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
        // Add user to the state array
        state.failedLogin = true;
      }),
      builder.addCase(signUp.fulfilled, (state, action: PayloadAction<any>) => {
        // Add user to the state array
        if (action.payload.username) {
          state.currentUser = action.payload.username;
          state.isLoggedIn = true;
          state.currentUserId = action.payload.user_id;
        }
      });
  },
});

// Later, dispatch the thunk as needed in the app
// export const { } = usersSlice.actions;
export { login, signUp };
export default usersSlice.reducer;
