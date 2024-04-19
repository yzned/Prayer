import {StyleSheet} from 'react-native';
import {colors} from '../../7_shared/Colors/colors';
import {typography} from '../../../typography';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    button: {
      marginTop: 8,
    },
    buttons: {
      paddingLeft: 16,
      paddingRight: 16,
    },
  });
