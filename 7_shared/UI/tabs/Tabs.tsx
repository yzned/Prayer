import {View, Text, Pressable, PressableProps} from 'react-native';
import React, {FC, useState} from 'react';
import {getStyles} from './styles';
import {colors} from '../../Colors/colors';
type TabsTypes = {} & PressableProps;
export const Tabs: FC<TabsTypes> = () => {
  const themeColors = colors;
  const styles = getStyles(themeColors);
  const [pressedButton, setPressed] = useState(1);
  const onPressPrayers = () => {
    setPressed(1);
  };
  const onPressAnswered = () => {
    setPressed(2);
  };
  return (
    <View style={styles.tabs}>
      <Pressable
        style={[pressedButton === 1 ? styles.pressed : styles.noPressed]}
        onPress={onPressPrayers}>
        <Text style={styles.text}>Prayers</Text>
      </Pressable>
      <Pressable
        style={[pressedButton === 2 ? styles.pressed : styles.noPressed]}
        onPress={onPressAnswered}>
        <Text style={styles.text}>Answered</Text>
      </Pressable>
    </View>
  );
};
