import {StyleSheet} from 'react-native';
import {typography} from '../../../typography';
import {colors} from '../../7_shared/Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    tapBarItem: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarStyles: {
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      borderTopColor: 'white',
      height: 60,
    },
    pageName: {
      ...typography.captioinRegular12,
      color: colors.grayscale.grayscale600,
    },
    tapBarItemFocusedColor: {
      color: colors.grayscale.grayscale800,
    },
  });
