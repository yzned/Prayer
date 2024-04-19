import {StyleSheet} from 'react-native';
import {colors} from '../../Colors/colors';
import {typography} from '../../../../typography';

export const getStyles = (colors: colors) =>
  StyleSheet.create({
    label: {
      color: colors.grayscale.grayscale700,
      fontWeight: '500',
      marginLeft: 0,
      ...typography.headLineBold16,
    },
    container: {
      marginTop: 16,
    },
    input: {
      width: 343,
      paddingTop: 15,
      paddingBottom: 15,
      ...typography.bodyRegular16,
      color: colors.grayscale.grayscale800,
      position: 'relative',
    },
    border: {
      borderBottomWidth: 1,
      borderBottomColor: colors.grayscale.grayscale500,
    },
    borderError: {
      borderBottomWidth: 1,
      borderBottomColor: colors.additional.error,
    },
    icon: {
      position: 'absolute',
      right: 0,
      top: '35%',
    },
    errorLabel: {
      fontWeight: '500',
      marginLeft: 0,
      color: colors.additional.error,
    },
    errorInput: {
      height: 49,
      padding: 0,
      ...typography.bodyRegular16,
      position: 'relative',
      color: colors.additional.error,
    },
    activeInput: {
      height: 49,
      padding: 0,
      ...typography.bodyRegular16,
      borderBottomWidth: 1,
      borderBottomColor: colors.grayscale.grayscale100,
      color: colors.grayscale.grayscale700,
      position: 'relative',
    },
    activeBorder: {
      borderBottomWidth: 1,
      borderBottomColor: colors.grayscale.grayscale700,
    },
    validBorder: {
      borderBottomWidth: 1,
      borderBottomColor: colors.additional.success,
    },
    validText: {
      color: colors.additional.success,
    },
    check: {
      position: 'absolute',
      right: 0,
      bottom: 10,
    },
  });
