import {Text, Pressable, PressableProps, View} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from '../../../Colors/colors';
import {getStyles} from './styles';
import SvgSmallCheck from '../../../../../--no-index/small-check';
type PrimaryButtonProps = {
  isRegistred?: boolean;
} & PressableProps;
export const SubscribeButton: FC<PrimaryButtonProps> = ({
  disabled,
  onPress,
  isRegistred,
}) => {
  const themeColors = colors;
  const styles = getStyles(themeColors);
  const [textPressed, setPressed] = useState(false);
  return isRegistred ? (
    <Pressable
      style={[
        styles.followButtonStyles,
        textPressed && styles.followPressedButton,
      ]}
      onPress={onPress}
      onPressIn={() => {
        setPressed(true);
      }}
      onPressOut={() => {
        setPressed(false);
      }}>
      <View style={styles.buttonContent}>
        <Text style={[styles.buttonText, disabled && styles.disabledText]}>
          Following
        </Text>
        <SvgSmallCheck />
      </View>
    </Pressable>
  ) : (
    <Pressable
      style={[
        styles.unfollowButtonStyles,
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
      <Text style={[styles.buttonText, disabled && styles.disabledText]}>
        Follow
      </Text>
    </Pressable>
  );
};
