import {View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ScreenHeader} from '../../5_features/ScreenHeader/ScreenHeader';
import {PrayersList} from '../../4_widgets/PrayersList/PrayersList';
import {useGetPrayers} from './model';

export const Prayers = () => {
  const route = useRoute();
  const {columnName, columnId} = route.params;
  const prayers = useGetPrayers(columnId);
  return (
    <View>
      <ScreenHeader namePage={columnName} />
      <View>
        <PrayersList
          prayers={prayers.prayers}
          fetchPrayers={prayers.fetchPrayers}
        />
      </View>
    </View>
  );
};
