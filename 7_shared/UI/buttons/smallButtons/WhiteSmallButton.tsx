import {Text, Pressable, PressableProps} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from '../../../Colors/colors';
import {getStyles} from './styles';
type PrimaryButtonProps = {
  name: string;
  isExit?: boolean;
} & PressableProps;
export const WhiteSmallButton: FC<PrimaryButtonProps> = ({
  disabled,
  onPress,
  name,
  isExit,
}) => {
  const themeColors = colors;
  const styles = getStyles(themeColors);
  const [textPressed, setPressed] = useState(false);
  return (
    <Pressable
      style={[
        styles.whiteButtonStyles,
        textPressed && styles.whitePressedButton,
        disabled && styles.whiteDisabledButton,
      ]}
      onPress={onPress}
      onPressIn={() => {
        setPressed(true);
      }}
      onPressOut={() => {
        setPressed(false);
      }}>
      <Text
        style={[styles.whiteButtonText, disabled && styles.whiteDisabledText]}>
        {name}
      </Text>
    </Pressable>
  );
};
