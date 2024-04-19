import {View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ScreenHeader} from '../../5_features/ScreenHeader/ScreenHeader';
import {useGetColumns} from './model';
import {ColumnList} from '../../4_widgets/ColumnList/ColumnList';

export const UserDesk = () => {
  const route = useRoute();
  const {userName, deskId} = route.params;
  const columns = useGetColumns(deskId);
  return (
    <View>
      <ScreenHeader namePage={userName} />
      <View>
        <ColumnList columns={columns.columns} fetchData={columns.fetchData} />
      </View>
    </View>
  );
};
