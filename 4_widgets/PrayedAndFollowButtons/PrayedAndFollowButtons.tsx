import {View} from 'react-native';
import React, {FC} from 'react';
import {getStyles} from './styles';
import {colors} from '../../7_shared/Colors/colors';
import {PrayerPrimaryButton} from '../../5_features/PrayedButton/PrayerPrimaryButton';
import {FollowButton} from '../../5_features/FollowButton/FollowButton';

type PrayedAndFollowButtonsTypes = {
  prayerId: number;
};
export const PrayedAndFollowButtons: FC<PrayedAndFollowButtonsTypes> = ({
  prayerId,
}) => {
  const styles = getStyles(colors);
  return (
    <View style={styles.buttons}>
      <View style={styles.button}>
        <PrayerPrimaryButton prayerId={prayerId} />
      </View>
      <View style={styles.button}>
        <FollowButton prayerId={prayerId} />
      </View>
    </View>
  );
};
