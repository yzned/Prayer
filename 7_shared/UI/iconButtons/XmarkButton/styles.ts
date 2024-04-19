import {StyleSheet} from 'react-native';
import {colors} from '../../../Colors/colors';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    buttonStyles: {
      backgroundColor: colors.grayscale.grayscale400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 34,
      width: 34,
      borderRadius: 100,
    },
    pressedButton: {
      backgroundColor: colors.grayscale.grayscale500,
    },
    disabledButton: {
      backgroundColor: colors.grayscale.grayscale500,
    },
  });
