import {StyleSheet} from 'react-native';
import {typography} from '../../../../typography';
import {colors} from '../../Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    tabs: {
      display: 'flex',
      height: 47,
      backgroundColor: colors.grayscale.grayscale400,
      flexDirection: 'row',
      borderRadius: 22,
      overflow: 'hidden',
    },
    pressed: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      borderRadius: 18,
      backgroundColor: colors.grayscale.grayscale100,
    },
    text: {
      color: colors.grayscale.grayscale800,
      ...typography.bodyMedium16,
    },
    noPressed: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      backgroundColor: colors.grayscale.grayscale400,
    },
  });
