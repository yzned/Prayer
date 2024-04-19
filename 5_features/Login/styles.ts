import {StyleSheet} from 'react-native';
import {typography} from '../../../typography';
import {colors} from '../../7_shared/Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    registration: {
      width: '100%',
      height: '100%',
    },
    background: {
      position: 'absolute',
      zIndex: -10,
    },
    registrationContent: {
      position: 'absolute',
      zIndex: 10,
      bottom: 0,
      backgroundColor: colors.grayscale.grayscale100,
      width: '100%',

      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      paddingTop: 36,
      paddingLeft: 24,
      paddingRight: 24,
      paddingBottom: 36,
    },
    header: {
      ...typography.titleSemibold28,
      color: colors.grayscale.grayscale800,
    },
    input: {},
    errrorMesage: {
      color: colors.additional.error,
      ...typography.bodyRegular14,
      marginTop: 6,
    },
    eye: {
      position: 'absolute',
      right: 0,
      bottom: 12,
    },
    bottomPart: {
      marginTop: 42,
    },
    bottomPartText: {
      ...typography.bodyRegular16,
      color: colors.grayscale.grayscale800,
    },
    bottomPartContent: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 12,
    },
  });
