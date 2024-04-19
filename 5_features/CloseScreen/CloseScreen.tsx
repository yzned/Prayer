import {View} from 'react-native';
import React, {FC} from 'react';
import {LeftArrowButton} from '../../7_shared/UI/iconButtons/LeftArrowButton/LeftArrowButton';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
type CloseScreenProps = {
  fetchPrayers?: () => Promise<void>;
};
export const CloseScreen: FC<CloseScreenProps> = ({fetchPrayers}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const closeScreen = () => {
    navigation.goBack();
    if (fetchPrayers) {
      fetchPrayers();
    }
  };
  return (
    <View>
      <LeftArrowButton onPress={closeScreen} />
    </View>
  );
};
