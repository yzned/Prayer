import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../../7_shared/Colors/colors';
import CloseAccount from '../CloseAccount/CloseAccount';
import {getStyles} from './styles';
import {CloseScreen} from '../CloseScreen/CloseScreen';

type PageHeaderTypes = {
  namePage: string;
  fetchPrayers?: () => Promise<void>;
};

export const ScreenHeader: FC<PageHeaderTypes> = ({namePage, fetchPrayers}) => {
  const styles = getStyles(colors);
  return (
    <View style={styles.pageHeader}>
      <View style={styles.button}>
        <CloseScreen fetchPrayers={fetchPrayers} />
      </View>
      <Text style={styles.namePage}>{namePage}</Text>
    </View>
  );
};
