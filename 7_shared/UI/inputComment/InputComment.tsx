import {View, Text, TextInput, PressableProps} from 'react-native';
import React, {FC} from 'react';

import {colors} from '../../Colors/colors';
import {getStyles} from './styles';
import {SendButton} from '../iconButtons/SendButton/SendButton';
type InputCommentTypes = {
  value?: string;
  onChange?: () => void;
} & PressableProps;
export const InputComment: FC<InputCommentTypes> = ({
  value,
  onChange,
  onPress,
}) => {
  const styles = getStyles(colors);
  return (
    <View style={styles.inputComment}>
      <TextInput
        style={styles.input}
        placeholder="Enter your comment"
        value={value}
        onChangeText={onChange}
        selectionColor={styles.caretColor.color}
      />
      <View style={styles.sendButton}>
        <SendButton onPress={onPress} />
      </View>
    </View>
  );
};
