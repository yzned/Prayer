import {StyleSheet} from 'react-native';
import {colors} from '../../7_shared/Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    desk: {
      marginLeft: 16,
      marginRight: 16,
      marginTop: 20,
      borderRadius: 24,
      paddingLeft: 16,
      paddingRight: 16,

      overflow: 'hidden',
    },
    createColumn: {
      position: 'absolute',
      zIndex: 100,
      bottom: 30,
      right: 16,
    },
  });
