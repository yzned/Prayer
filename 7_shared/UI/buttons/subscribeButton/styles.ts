import {StyleSheet} from 'react-native';
import {colors} from '../../../Colors/colors';
import {typography} from '../../../../../typography';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    followButtonStyles: {
      backgroundColor: colors.grayscale.grayscale100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      borderRadius: 18,
      borderWidth: 2,
      borderColor: colors.grayscale.grayscale300,
    },
    followPressedButton: {
      borderColor: colors.grayscale.grayscale600,
    },
    unfollowButtonStyles: {
      backgroundColor: colors.grayscale.grayscale300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      borderRadius: 18,
    },
    buttonText: {
      color: colors.grayscale.grayscale800,
      ...typography.bodyMedium16,
      marginRight: 4,
    },
    pressedButton: {
      backgroundColor: colors.grayscale.grayscale600,
    },
    disabledButton: {
      backgroundColor: colors.grayscale.grayscale300,
    },
    disabledText: {
      color: colors.grayscale.grayscale600,
    },
    exitText: {
      color: colors.additional.error,
    },
    buttonContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
