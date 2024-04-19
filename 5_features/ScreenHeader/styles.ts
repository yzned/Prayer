import {StyleSheet} from 'react-native';
import {typography} from '../../../typography';
import {colors} from '../../7_shared/Colors/colors';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    pageHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
      marginTop: 15,
    },
    namePage: {
      ...typography.headLineSemibold20,
      color: colors.grayscale.grayscale800,
    },
    button: {
      position: 'absolute',
      left: 16,
      top: 5,
    },
  });
