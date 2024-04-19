import {ImageBackground, Text, View} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';
import {useprayerInformation} from './model';
import useDateFormatter from '../../7_shared/hooks/useDateFormate';

type PrayerInformationTypes = {
  prayerId: number;
};

export const PrayerInformation: FC<PrayerInformationTypes> = ({prayerId}) => {
  const styles = getStyles(colors);
  const data = useprayerInformation(prayerId);
  const prayerInfo = Array.isArray(data) ? data[0] : data;
  const creationDate = useDateFormatter({dateString: prayerInfo?.createdAt});
  return (
    <ImageBackground
      source={require('../../7_shared/assets/icons/png/Mask.png')}
      style={styles.desk}>
      <View style={styles.topPart}>
        <View style={styles.deskInformation}>
          <Text style={styles.infoName}>Date</Text>
          <Text style={styles.info}>{creationDate.formattedDate}</Text>
        </View>
        <View style={styles.deskInformation}>
          <Text style={styles.infoName}>Total prayers</Text>
          <Text style={styles.info}>
            {prayerInfo?.subscribersCount === undefined
              ? 0
              : prayerInfo?.subscribersCount}
          </Text>
        </View>
      </View>
      <View style={styles.bottomPart}>
        <View style={styles.deskInformation}>
          <Text style={styles.infoName}>Other prayers</Text>
          <Text style={styles.info}>
            {prayerInfo?.otherPrayCount === undefined
              ? 0
              : prayerInfo?.otherPrayCount}
          </Text>
        </View>
        <View style={styles.deskInformation}>
          <Text style={styles.infoName}>My prayers</Text>
          <Text style={styles.info}>
            {prayerInfo?.myPrayCount === undefined
              ? 0
              : prayerInfo?.myPrayCount}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
