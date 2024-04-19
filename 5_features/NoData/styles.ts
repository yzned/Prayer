import {StyleSheet} from 'react-native';
import {colors} from '../../7_shared/Colors/colors';
import {typography} from '../../../typography';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    text: {...typography.headLineRegular18, marginTop: 20, marginBottom: 20},
    sketch: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrow: {
      marginLeft: 150,
    },
  });
