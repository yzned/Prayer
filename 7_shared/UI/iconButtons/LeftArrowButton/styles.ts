import {StyleSheet} from 'react-native';
import {colors} from '../../../Colors/colors';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    buttonStyles: {
      backgroundColor: colors.grayscale.grayscale100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 42,
      width: 42,
      borderRadius: 100,
    },
    pressedButton: {
      backgroundColor: colors.grayscale.grayscale500,
    },
    disabledButton: {
      backgroundColor: colors.grayscale.grayscale500,
    },
  });
