import {View} from 'react-native';
import React from 'react';
import {PageHeader} from '../../5_features/PageHeader/PageHeader';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';
import {useGetFollowedPrayers} from './model';
import {PrayersList} from '../../4_widgets/PrayersList/PrayersList';

export default function Followed() {
  const styles = getStyles(colors);
  const followedPrayers = useGetFollowedPrayers();
  followedPrayers.fetchData();
  return (
    <View style={styles.mainPage}>
      <PageHeader namePage="Followed" />
      <View>
        <PrayersList
          prayers={followedPrayers.followed}
          fetchPrayers={followedPrayers.fetchData}
        />
      </View>
    </View>
  );
}
