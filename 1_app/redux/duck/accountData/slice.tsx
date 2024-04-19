import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {loginToAccountTypes} from '../../types/accountDataTypes';

type accountDataType = {
  isLogin: boolean;
  token: string;
};

const accountDataSlice = createSlice({
  name: 'token',
  initialState: {
    token: '',
  } as accountDataType,
  reducers: {
    loginToAccount(state, action: PayloadAction<loginToAccountTypes>) {
      state.isLogin = true;
      state.token = action.payload.token;
    },
    leaveToAccount(state) {
      state.isLogin = false;
      state.token = '';
    },
  },
});

export const {loginToAccount, leaveToAccount} = accountDataSlice.actions;
export default accountDataSlice.reducer;
