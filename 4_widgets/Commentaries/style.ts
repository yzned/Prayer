import {StyleSheet} from 'react-native';
import {colors} from '../../7_shared/Colors/colors';
import {typography} from '../../../typography';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    commentaries: {
      marginTop: 10,
      marginBottom: 60,
    },
    content: {
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: colors.grayscale.grayscale500,
      paddingBottom: 24,
    },
    header: {
      ...typography.headLineMedium18,
      color: colors.grayscale.grayscale800,
      textAlign: 'center',
    },
  });
