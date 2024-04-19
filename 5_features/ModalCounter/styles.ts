import {StyleSheet} from 'react-native';
import {typography} from '../../../typography';
import {colors} from '../../7_shared/Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    modal: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundClose: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.grayscale.grayscale800,
      opacity: 0.7,
      position: 'absolute',
    },
    modalContent: {
      width: 343,
      height: 251,
      backgroundColor: colors.grayscale.grayscale100,
      borderRadius: 20,
      paddingTop: 32,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 32,
      justifyContent: 'space-between',
    },
    sorry: {
      ...typography.titleSemibold28,
      color: colors.grayscale.grayscale800,
      textAlign: 'center',
    },
    text: {
      ...typography.headLineRegular18,
      color: colors.grayscale.grayscale800,
      textAlign: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },
  });
