import {View} from 'react-native';
import React, {FC} from 'react';
import {PrayButton} from '../../7_shared/UI/iconButtons/PrayButton/PrayButton';
import {
  completePrayRequest,
  doPrayRequest,
} from '../../7_shared/api/axios/requests/Prayers';

type PrayerButtonTypes = {
  prayerId: number;
};
export const PrayerButton: FC<PrayerButtonTypes> = ({prayerId}) => {
  const doPray = async () => {
    try {
      await completePrayRequest(prayerId);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <PrayButton onPress={doPray} />
    </View>
  );
};
