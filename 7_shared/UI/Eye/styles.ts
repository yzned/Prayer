import {StyleSheet} from 'react-native';
import {colors} from '../../Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    defaultColor: {
      color: colors.grayscale.grayscale400,
    },
    errorColor: {
      color: colors.additional.error,
    },
    activeColor: {
      color: colors.grayscale.grayscale800,
    },
  });
