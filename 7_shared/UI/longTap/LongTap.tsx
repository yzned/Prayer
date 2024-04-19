import {PressableProps, TextInput} from 'react-native';
import {colors} from '../../Colors/colors';
import {getStyles} from './styles';

type LongTapProps = {} & PressableProps;

export default function LongTap({}: LongTapProps) {
  const themeColors = colors;
  const styles = getStyles(themeColors);

  return (
    <TextInput
      style={styles.input}
      selectionColor={styles.caretColor.color}
      maxLength={15}
    />
  );
}
