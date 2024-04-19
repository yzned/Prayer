import {View} from 'react-native';
import React, {FC} from 'react';
import {ScreenHeader} from '../../5_features/ScreenHeader/ScreenHeader';
import {PrayersList} from '../../4_widgets/PrayersList/PrayersList';
import {useGetPrayers} from './model';
import {CreatePrayer} from '../../4_widgets/CreatePrayer/CreatePrayer';
import {getStyles} from './styles';
import {colors} from '../../7_shared/Colors/colors';
import {NoData} from '../../5_features/NoData/NoData';
import {MyPrayersScreenProps} from '../../7_shared/navigation/screenProps';
import {MyPrayersList} from '../../4_widgets/MyPrayersList/MyPrayersList';

export const MyPrayers: FC<MyPrayersScreenProps> = ({route}) => {
  const {columnName, columnId} = route.params;
  const styles = getStyles(colors);
  const prayers = useGetPrayers(columnId);
  return (
    <View style={styles.myPrayers}>
      <View>
        <ScreenHeader namePage={columnName} />
      </View>
      <View style={styles.createPrayer}>
        <CreatePrayer columnId={columnId} fetchPrayers={prayers.fetchPrayers} />
      </View>
      {prayers.prayers?.length > 0 ? (
        <View>
          <MyPrayersList
            myPrayers={prayers.prayers}
            fetchPrayers={prayers.fetchPrayers}
          />
        </View>
      ) : (
        <View style={styles.heaventColumn}>
          <NoData name="prayer" />
        </View>
      )}
    </View>
  );
};
