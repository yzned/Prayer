import {Text, Pressable, PressableProps} from 'react-native';
import React, {FC, useState} from 'react';

import {getStyles} from './styles';
import {colors} from '../../Colors/colors';
type PrimaryButtonProps = {
  name: string;
} & PressableProps;
export const DeskCard: FC<PrimaryButtonProps> = ({onPress, name}) => {
  const styles = getStyles(colors);
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      style={[styles.buttonStyles, pressed && styles.pressedButton]}
      onPress={onPress}
      onPressIn={() => {
        setPressed(true);
      }}
      onPressOut={() => {
        setPressed(false);
      }}>
      <Text style={[styles.buttonText]}>{name}</Text>
    </Pressable>
  );
};
