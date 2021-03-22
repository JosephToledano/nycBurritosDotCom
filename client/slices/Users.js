import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
const login = createAsyncThunk(
  "login/",
  async (username, password, thunkAPI) => {
    const response = await fetch("login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    parsedResponse = response.json();
    return parsedResponse;
  }
);

const signUp = createAsyncThunk("signup/", async (username, password) => {
  const response = await fetch("signup", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  parsedResponse = response.json();
  return parsedResponse;
});

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: "",
    isLoggedIn: false,
    currentUserId: -1,
    loading: "idle",
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [login.fulfilled]: (state, action) => {
      // Add user to the state array
      if (action.payload.username) {
        state.currentUser = action.payload.username;
        state.isLoggedIn = true;
        state.currentUserId = action.payload.user_id;
      }
    },
    [signUp.fulfilled]: (state, action) => {
      // Add user to the state array
      if (action.payload.username) {
        state.currentUser = action.payload.username;
        state.isLoggedIn = true;
        state.currentUserId = action.payload.user_id;
      }
    },
  },
});

// Later, dispatch the thunk as needed in the app
// export const { login, signUp } = usersSlice.actions;
export default usersSlice.reducer;
export const userSelector = (state) => state.user;
