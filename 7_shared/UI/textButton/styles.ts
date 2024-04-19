import {StyleSheet} from 'react-native';

import {typography} from '../../../../typography';
import {colors} from '../../Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    textStyle: {
      color: colors.cardIndicators.orangeIndicator,
      ...typography.bodyMedium16,
    },
    pressed: {
      color: colors.additional.error,
      ...typography.bodyMedium16,
    },
    disabled: {
      color: colors.grayscale.grayscale600,
      ...typography.bodyMedium16,
    },
  });
