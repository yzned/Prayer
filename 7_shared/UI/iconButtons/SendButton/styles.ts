import {StyleSheet} from 'react-native';
import {colors} from '../../../Colors/colors';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    buttonStyles: {
      backgroundColor: colors.grayscale.grayscale800,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
      width: 48,
      borderRadius: 12,
    },
    pressedButton: {
      backgroundColor: colors.grayscale.grayscale700,
    },
    disabledButton: {
      backgroundColor: colors.grayscale.grayscale500,
    },
    svg: {
      marginLeft: 3,
    },
  });
