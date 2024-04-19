import {View} from 'react-native';
import React from 'react';
import {PageHeader} from '../../5_features/PageHeader/PageHeader';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';
import {useGetMyColumns} from './model';
import {useGetColumns} from '../UserDesk/model';
import {CreateColumn} from '../../4_widgets/CreateColumn/CreateColumn';
import {ColumnList} from '../../4_widgets/ColumnList/ColumnList';
import {NoData} from '../../5_features/NoData/NoData';
import {MyColumnList} from '../../4_widgets/MyColumnList/MyColumnList';

export const MyDesk = () => {
  const styles = getStyles(colors);
  const myPrayersData = useGetMyColumns();
  const columns = useGetColumns(myPrayersData?.id ? myPrayersData.id : 0);
  return (
    <View style={styles.mainPage}>
      <PageHeader namePage="My desk" />
      <View style={styles.createColumn}>
        <CreateColumn fetchData={columns.fetchData} />
      </View>
      {columns.columns?.length > 0 ? (
        <View>
          <View>
            <MyColumnList
              columns={columns.columns}
              fetchData={columns.fetchData}
            />
          </View>
        </View>
      ) : (
        <View style={styles.heaventColumn}>
          <NoData name="column" />
        </View>
      )}
    </View>
  );
};
