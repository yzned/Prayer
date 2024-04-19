import {StyleSheet} from 'react-native';
import {colors} from '../../7_shared/Colors/colors';
import {typography} from '../../../typography';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    buttonStyles: {
      backgroundColor: colors.grayscale.grayscale100,
      height: 95,
      borderRadius: 24,
      padding: 24,
      marginTop: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    deleteButton: {position: 'absolute', right: 0, bottom: 0},
    buttonText: {
      ...typography.headLineSemibold20,
      color: colors.grayscale.grayscale800,
    },
    timeIndicator: {
      backgroundColor: colors.cardIndicators.blueIndicator,
      width: 24,
      height: '100%',
      borderRadius: 10,
      marginRight: 12,
    },
    timeIndicatorYellow: {
      backgroundColor: colors.cardIndicators.yellowIndicator,
      width: 24,
      height: '100%',
      borderRadius: 10,
      marginRight: 12,
    },
    timeIndicatorRedd: {
      backgroundColor: colors.cardIndicators.orangeIndicator,
      width: 24,
      height: '100%',
      borderRadius: 10,
      marginRight: 12,
    },
    cardMidlePart: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    cardInformation: {flexDirection: 'row'},
    prayerName: {...typography.headLineMedium18, marginBottom: 3},
    infoName: {
      ...typography.bodyRegular14,
      color: colors.grayscale.grayscale700,
    },
    count: {
      ...typography.bodyBold14,
      color: colors.grayscale.grayscale800,
    },
  });
