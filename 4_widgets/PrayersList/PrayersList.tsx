import {View, FlatList} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';
import {PrayerType} from '../../7_shared/api/axios/types/responseTypes';
import {PrayerCard} from '../../5_features/PrayerCard/PrayerCard';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
type PrayersListProps = {
  prayers?: PrayerType[];
  fetchPrayers?: () => Promise<void>;
};
export const PrayersList: FC<PrayersListProps> = ({prayers, fetchPrayers}) => {
  const styles = getStyles(colors);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View>
      <FlatList
        data={prayers}
        style={styles.desk}
        renderItem={prayer => (
          <PrayerCard
            name={prayer.item.title}
            members={prayer.item.subscribersCount}
            complete={prayer.item.completesCount}
            prayerId={prayer.item.id}
            lastPrayedTime={prayer.item.lastPrayerEvent?.updatedAt}
            onPress={() => {
              navigation.navigate('prayerPage', {
                prayerName: prayer.item.title,
                prayerId: prayer.item.id,
                fetchPrayers: fetchPrayers,
              });
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
