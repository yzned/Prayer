import {StyleSheet} from 'react-native';
import {colors} from '../../Colors/colors';
import {typography} from '../../../../typography';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    buttonStyles: {
      backgroundColor: colors.grayscale.grayscale100,
      height: 76,
      borderRadius: 24,
      padding: 24,
      marginTop: 12,
      marginBottom: 12,
    },
    pressedButton: {
      backgroundColor: colors.grayscale.grayscale300,
    },
    buttonText: {
      ...typography.headLineSemibold20,
      color: colors.grayscale.grayscale800,
    },
  });
