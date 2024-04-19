import {Pressable, PressableProps, View} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from '../../../Colors/colors';
import {getStyles} from './styles';
import SvgTrash from '../../../../../--no-index/trash';
type PlusButtonProps = {} & PressableProps;

export const DeleteButton: FC<PlusButtonProps> = ({disabled, onPress}) => {
  const styles = getStyles(colors);
  const [textPressed, setPressed] = useState(false);
  return (
    <Pressable
      style={styles.buttonStyles}
      onPress={onPress}
      onPressIn={() => {
        setPressed(true);
      }}
      onPressOut={() => {
        setPressed(false);
      }}>
      <View style={styles.svg}>
        <SvgTrash />
      </View>
    </Pressable>
  );
};
