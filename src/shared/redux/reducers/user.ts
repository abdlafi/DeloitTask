import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface State {
  loading: boolean;
  data: usersState[];
}
interface usersState {
  id: number;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
}

// Define the initial state using that type
const initialState: State = {
  loading: false,
  data: [
    {
      id: 0,
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
    },
  ],
};

export const fillusers = createAsyncThunk(
  'usersSettings/fillusers',
  async (form: any) => {
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
      state.data = action.payload.data;
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
