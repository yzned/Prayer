import {StyleSheet} from 'react-native';
import {colors} from '../../7_shared/Colors/colors';
import {typography} from '../../../typography';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    inputComment: {
      position: 'absolute',
      paddingBottom: 10,
      paddingLeft: 16,
      paddingRight: 16,
      zIndex: 100,
      width: '100%',
      bottom: 0,
    },
  });
