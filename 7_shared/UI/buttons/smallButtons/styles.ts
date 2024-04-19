import {StyleSheet} from 'react-native';
import {colors} from '../../../Colors/colors';
import {typography} from '../../../../../typography';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    buttonStyles: {
      backgroundColor: colors.grayscale.grayscale800,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 46,
      borderRadius: 18,
    },
    buttonText: {
      color: colors.grayscale.grayscale100,
      ...typography.bodyMedium16,
    },
    pressedButton: {
      backgroundColor: colors.grayscale.grayscale700,
    },
    disabledButton: {
      backgroundColor: colors.grayscale.grayscale500,
    },
    disabledText: {
      color: colors.grayscale.grayscale400,
    },

    whiteButtonStyles: {
      backgroundColor: colors.grayscale.grayscale300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 46,
      borderRadius: 18,
    },
    whiteButtonText: {
      color: colors.grayscale.grayscale800,
      ...typography.bodyMedium16,
    },
    whitePressedButton: {
      backgroundColor: colors.grayscale.grayscale600,
    },
    whiteDisabledButton: {
      backgroundColor: colors.grayscale.grayscale300,
    },
    whiteDisabledText: {
      color: colors.grayscale.grayscale600,
    },
  });
