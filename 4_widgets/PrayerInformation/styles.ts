import {StyleSheet} from 'react-native';
import {colors} from '../../7_shared/Colors/colors';
import {typography} from '../../../typography';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    desk: {
      marginLeft: 16,
      marginRight: 16,
      marginTop: 20,
      borderRadius: 24,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      paddingBottom: 16,
      overflow: 'hidden',
    },
    deskInformation: {
      width: 150,
      height: 109,
      backgroundColor: colors.grayscale.grayscale100,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
    },
    topPart: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    bottomPart: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
    },
    infoName: {
      ...typography.headLineRegular18,
      color: colors.grayscale.grayscale700,
    },
    info: {
      ...typography.headLineSemibold20,
      color: colors.grayscale.grayscale800,
    },
  });
