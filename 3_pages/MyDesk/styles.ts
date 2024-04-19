import {StyleSheet} from 'react-native';
import {typography} from '../../../typography';
import {colors} from '../../7_shared/Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    heaventColumn: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '90%',
      backgroundColor: colors.grayscale.grayscale100,
    },
    mainPage: {
      marginTop: 15,
      width: '100%',
      height: '100%',
      backgroundColor: colors.grayscale.grayscale100,
      paddingBottom: 80,
    },
    createColumn: {
      position: 'absolute',
      zIndex: 100,
      bottom: 30,
      right: 16,
    },
  });
