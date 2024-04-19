import {StyleSheet} from 'react-native';
import {typography} from '../../../typography';
import {colors} from '../../7_shared/Colors/colors';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    pageHeader: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    namePage: {
      ...typography.titleSemibold28,
      color: colors.grayscale.grayscale800,
    },
  });
