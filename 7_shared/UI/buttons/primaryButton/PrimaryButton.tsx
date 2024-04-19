import {Text, Pressable, PressableProps} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from '../../../Colors/colors';
import {getStyles} from './styles';
type PrimaryButtonProps = {
  name: string;
  isExit?: boolean;
} & PressableProps;
export const PrimaryButton: FC<PrimaryButtonProps> = ({
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
      <Text
        style={[
          styles.buttonText,
          disabled && styles.disabledText,
          isExit && styles.exitText,
        ]}>
        {name}
      </Text>
    </Pressable>
  );
};
