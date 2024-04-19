import {StyleSheet} from 'react-native';
import {colors} from '../../../Colors/colors';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    buttonStyles: {
      backgroundColor: colors.grayscale.grayscale800,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 65,
      width: 65,
      borderRadius: 100,
    },
    pressedButton: {
      backgroundColor: colors.grayscale.grayscale700,
    },
    disabledButton: {
      backgroundColor: colors.grayscale.grayscale500,
    },
  });
