import React from 'react';
import {UserIsGuest} from './UserIsGuest';
import {NavigationContainer} from '@react-navigation/native';
import {UserIsRegistred} from './UserIsRegistred';
import {useAppSelector} from '../../7_shared/hooks/reduxHooks';

export default function Navigation() {
  const checkIsLoginStatus = useAppSelector(state => state.accountData.isLogin);
  return (
    <NavigationContainer>
      {checkIsLoginStatus === false || checkIsLoginStatus === undefined ? (
        <UserIsGuest />
      ) : (
        <UserIsRegistred />
      )}
    </NavigationContainer>
  );
}
