import {View, Text} from 'react-native';
import React from 'react';
import {CloseButton} from '../../7_shared/UI/iconButtons/CloseButton/CloseButton';
import {useAppDispatch} from '../../7_shared/hooks/reduxHooks';
import {leaveToAccount} from '../../1_app/redux/duck/accountData/slice';

export default function CloseAccount() {
  const dispatch = useAppDispatch();
  const leaveAccount = () => {
    dispatch(leaveToAccount());
  };
  return (
    <View>
      <CloseButton onPress={leaveAccount} />
    </View>
  );
}
