import {StyleSheet} from 'react-native';
import {typography} from '../../../typography';
import {colors} from '../../7_shared/Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    myPrayers: {
      backgroundColor: colors.grayscale.grayscale300,
    },
    createPrayer: {
      position: 'absolute',
      zIndex: 100,
      bottom: 60,
      right: 16,
    },
    heaventColumn: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '95%',
      backgroundColor: colors.grayscale.grayscale100,
    },
  });
