import {StyleSheet} from 'react-native';
import {colors} from '../../7_shared/Colors/colors';
import {typography} from '../../../typography';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    comment: {padding: 16},
    infoPart: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    userId: {...typography.bodyMedium16, color: colors.grayscale.grayscale800},
    date: {...typography.bodyRegular16, color: colors.grayscale.grayscale700},
    body: {
      ...typography.bodyRegular16,
      marginTop: 12,
      color: colors.grayscale.grayscale800,
    },
  });
