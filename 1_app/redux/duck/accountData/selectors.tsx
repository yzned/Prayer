import {RootState} from '../../store';

export const accountDataSelectors = {
  getToken: (state: RootState) => state.accountData.token,
  getIsLoginStatus: (state: RootState) => state.accountData.isLogin,
};
