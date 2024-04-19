import {View} from 'react-native';
import React from 'react';
import {PageHeader} from '../../5_features/PageHeader/PageHeader';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';
import {useDesks} from './model';
import {DeskList} from '../../4_widgets/DeskList/DeskList';

export default function UserDesks() {
  const styles = getStyles(colors);
  const data = useDesks();
  return (
    <View style={styles.mainPage}>
      <PageHeader namePage="User desks" />
      <DeskList desks={data} />
    </View>
  );
}
