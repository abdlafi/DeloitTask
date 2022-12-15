import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface State {
  loading: boolean;
  data: userDataState;
}
interface userDataState {
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
  data: {
    id: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    password: '',
    needToSetPassword: true,
  },
};

export const filluserData = createAsyncThunk(
  'userDataSettings/filluserData',
  async (form: userDataState) => {
    var d = {data: form};
    return await d;
  },
);
export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(filluserData.pending, state => {
      state.loading = true;
    });
    builder.addCase(filluserData.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(filluserData.rejected, state => {
      state.loading = false;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const userDataStore = (state: RootState) => state.userData;

export default userDataSlice.reducer;
