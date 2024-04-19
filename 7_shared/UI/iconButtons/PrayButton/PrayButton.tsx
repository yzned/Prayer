import {Pressable, PressableProps} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from '../../../Colors/colors';
import {getStyles} from './styles';
import SvgPray from '../../../../../--no-index/pray';
type PlusButtonProps = {} & PressableProps;

export const PrayButton: FC<PlusButtonProps> = ({disabled, onPress}) => {
  const themeColors = colors;
  const styles = getStyles(themeColors);
  const [textPressed, setPressed] = useState(false);
  return (
    <Pressable
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
      <SvgPray />
    </Pressable>
  );
};
