import {StyleSheet} from 'react-native';
import {typography} from '../../../typography';
import {colors} from '../../7_shared/Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    mainPage: {
      marginTop: 15,
      backgroundColor: colors.grayscale.grayscale200,
    },
  });
