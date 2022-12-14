import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface State {
  loading: boolean;
  data: usersState[];
}
interface usersState {
  id: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  password: string;
  needToSetPassword: boolean;
}

// Define the initial state using that type
const initialState: State = {
  loading: false,
  data: [
    {
      id: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      password: '',
      needToSetPassword: true,
    },
  ],
};

export const fillusers = createAsyncThunk(
  'usersSettings/fillusers',
  async (form: usersState) => {
    var d = {data: form};
    return await d;
  },
);
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fillusers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fillusers.fulfilled, (state, action) => {
      state.data = [...state.data, action.payload.data];
      state.loading = false;
    });
    builder.addCase(fillusers.rejected, state => {
      state.loading = false;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const usersStore = (state: RootState) => state.users;

export default usersSlice.reducer;
