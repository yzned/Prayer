import {StyleSheet} from 'react-native';
import {colors} from '../../../Colors/colors';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    buttonStyles: {
      backgroundColor: colors.additional.error,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 95,
      width: 76,
      borderTopRightRadius: 24,
      borderBottomRightRadius: 24,
    },
    svg: {
      position: 'absolute',
      right: 16,
    },
  });
