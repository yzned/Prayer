import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';
import useDateFormatter from '../../7_shared/hooks/useDateFormate';

type CommentariesProps = {
  userId: number;
  creationDate: string;
  body: string;
};
export const Comment: FC<CommentariesProps> = ({
  userId,
  creationDate,
  body,
}) => {
  const styles = getStyles(colors);
  const date = useDateFormatter({dateString: creationDate});
  return (
    <View style={styles.comment}>
      <View style={styles.infoPart}>
        <Text style={styles.userId}>{userId}</Text>
        <Text style={styles.date}>{date.formattedDate}</Text>
      </View>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};
