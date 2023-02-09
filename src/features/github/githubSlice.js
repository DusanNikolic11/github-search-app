import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import githubService from './githubService';

const initialState = {
  users: [],
  user: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getUsers = createAsyncThunk(
  'users/get',
  async (searchData, { rejectWithValue }) => {
    try {
      return await githubService.getUsers(searchData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'user/get',
  async (userLogin, { rejectWithValue }) => {
    try {
      return await githubService.getUser(userLogin);
    } catch (error ) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = githubSlice.actions;
export default githubSlice.reducer;