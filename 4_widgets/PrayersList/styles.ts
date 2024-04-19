import {StyleSheet} from 'react-native';
import {typography} from '../../../typography';
import {colors} from '../../7_shared/Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    desk: {
      paddingLeft: 16,
      paddingRight: 16,
      height: '100%',
    },
  });
