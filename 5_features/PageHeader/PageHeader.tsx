import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';
import CloseAccount from '../CloseAccount/CloseAccount';

type PageHeaderTypes = {
  namePage: string;
};

export const PageHeader: FC<PageHeaderTypes> = ({namePage}) => {
  const styles = getStyles(colors);
  return (
    <View style={styles.pageHeader}>
      <Text style={styles.namePage}>{namePage}</Text>
      <CloseAccount />
    </View>
  );
};
