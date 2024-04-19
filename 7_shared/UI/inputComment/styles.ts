import {StyleSheet} from 'react-native';
import {typography} from '../../../../typography';
import {colors} from '../../Colors/colors';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    inputComment: {},
    input: {
      backgroundColor: colors.grayscale.grayscale300,
      paddingTop: 17,
      paddingBottom: 17,
      height: 56,
      paddingLeft: 22,
      ...typography.bodyRegular16,
      color: colors.grayscale.grayscale800,
      borderRadius: 16,
    },
    caretColor: {
      color: colors.cardIndicators.orangeIndicator,
    },
    sendButton: {
      position: 'absolute',
      right: 4,
      top: 4,
    },
  });
