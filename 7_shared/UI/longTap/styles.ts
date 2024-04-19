import {StyleSheet} from 'react-native';
import {colors} from '../../Colors/colors';
import {typography} from '../../../../typography';
export const getStyles = (colors: colors) =>
  StyleSheet.create({
    input: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      borderRadius: 16,
      width: 193,
      height: 44,
      ...typography.headLineSemibold20,
    },
    caretColor: {
      color: colors.cardIndicators.orangeIndicator,
    },
  });
