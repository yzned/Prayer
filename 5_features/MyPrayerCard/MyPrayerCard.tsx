import {Text, Pressable, PressableProps, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {getStyles} from './styles';
import {colors} from '../../7_shared/Colors/colors';
import {PrayerButton} from '../PrayerButton/PrayerButton';
import {SwipeRow} from 'react-native-swipe-list-view';
import {DeleteButton} from '../../7_shared/UI/buttons/deleteButton/DeleteButton';
import {DeletePrayer} from '../DeletePrayer/DeletePrayer';
type PrimaryButtonProps = {
  name?: string;
  members?: number;
  complete?: number;
  prayerId: number;
  lastPrayedTime?: string;
  fetchPrayers: () => Promise<void>;
} & PressableProps;
export const MyPrayerCard: FC<PrimaryButtonProps> = ({
  onPress,
  name,
  members,
  complete,
  lastPrayedTime,
  prayerId,
  fetchPrayers,
}) => {
  const styles = getStyles(colors);

  const [timeDiff, setTimeDiff] = useState<number | null>(null);
  useEffect(() => {
    if (lastPrayedTime) {
      const currentTime = new Date();
      const lastPrayed = new Date(lastPrayedTime);
      const diffInMs = currentTime.getTime() - lastPrayed.getTime();
      const diffInHours = diffInMs / (1000 * 60 * 60);
      setTimeDiff(diffInHours);
    }
  }, [lastPrayedTime]);
  return (
    <SwipeRow rightOpenValue={-58}>
      <View style={styles.deleteButton}>
        <DeletePrayer prayerId={prayerId} fetchPrayers={fetchPrayers} />
      </View>
      <Pressable style={[styles.buttonStyles]} onPress={onPress}>
        <View style={styles.cardMidlePart}>
          <View
            style={[
              timeDiff !== null && timeDiff < 1 && styles.timeIndicator,
              timeDiff !== null &&
                timeDiff > 1 &&
                timeDiff < 24 &&
                styles.timeIndicatorYellow,
              timeDiff != null && timeDiff > 24 && styles.timeIndicatorRedd,
              timeDiff == null && styles.timeIndicatorRedd,
            ]}></View>
          <View>
            <Text style={styles.prayerName}>{name}</Text>
            <View style={styles.cardInformation}>
              <Text style={styles.infoName}>
                Members <Text style={styles.count}>{members}</Text>
              </Text>
              <Text style={[styles.infoName, {marginLeft: 12}]}>
                Complete <Text style={styles.count}>{complete}</Text>
              </Text>
            </View>
          </View>
        </View>
        <PrayerButton prayerId={prayerId} />
      </Pressable>
    </SwipeRow>
  );
};
