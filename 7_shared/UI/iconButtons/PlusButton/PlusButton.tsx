import {Pressable, PressableProps} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from '../../../Colors/colors';
import {getStyles} from './styles';
import SvgPlus from '../../../../../--no-index/plus';
type PlusButtonProps = {onPress?: () => void} & PressableProps;
export const PlusButton: FC<PlusButtonProps> = ({disabled, onPress}) => {
  const themeColors = colors;
  const styles = getStyles(themeColors);
  const [textPressed, setPressed] = useState(false);
  return (
    <Pressable
      disabled={disabled}
      style={[
        styles.buttonStyles,
        textPressed && styles.pressedButton,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      onPressIn={() => {
        setPressed(true);
      }}
      onPressOut={() => {
        setPressed(false);
      }}>
      <SvgPlus />
    </Pressable>
  );
};
