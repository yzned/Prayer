import {StyleSheet} from 'react-native';
import {typography} from '../../../typography';
import {colors} from '../../7_shared/Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    desk: {
      height: '100%',
      paddingLeft: 16,
      paddingRight: 16,
    },
  });
