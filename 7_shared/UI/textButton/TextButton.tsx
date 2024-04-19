import {View, Text, PressableProps, Pressable} from 'react-native';
import {useState} from 'react';
import {colors} from '../../Colors/colors';
import {getStyles} from './styles';

type greenLinkProps = {
  text: string;
} & PressableProps;

export default function TextButton({text, onPress, disabled}: greenLinkProps) {
  const themeColors = colors;
  const styles = getStyles(themeColors);
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      <Text
        style={[
          styles.textStyle,
          pressed && styles.pressed,
          disabled && styles.disabled,
        ]}>
        {text}
      </Text>
    </Pressable>
  );
}
