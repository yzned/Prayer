import {Pressable, PressableProps} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../../Colors/colors';
import {getStyles} from './styles';
import SvgEye from '../../../../--no-index/eye';
import SvgEyeClosed from '../../../../--no-index/eye-closed';
type EyeProps = {
  showPassword: boolean;
  isError: boolean;
  isActive: boolean;
} & PressableProps;
export const Eye: FC<EyeProps> = ({
  showPassword,
  onPress,
  isError,
  isActive,
}) => {
  const styles = getStyles(colors);
  const checkCurrentStatus = () => {
    if (isError) {
      return styles.errorColor.color;
    }
    if (isActive) {
      return styles.activeColor.color;
    }
    return styles.defaultColor.color;
  };
  return (
    <Pressable onPress={onPress}>
      {showPassword ? (
        <SvgEye color={checkCurrentStatus()} />
      ) : (
        <SvgEyeClosed color={checkCurrentStatus()} />
      )}
    </Pressable>
  );
};
