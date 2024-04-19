import {FlatList, ImageBackground} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';
import {
  ColumnType,
  DeskType,
} from '../../7_shared/api/axios/types/responseTypes';
import {DeskCard} from '../../7_shared/UI/DeskCard/DeskCard';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {CreatePrayer} from '../CreatePrayer/CreatePrayer';
type MyColumnListProps = {
  columns?: ColumnType[];
  fetchData: () => Promise<void>;
};
export const MyColumnList: FC<MyColumnListProps> = ({columns, fetchData}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const styles = getStyles(colors);
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchData();
    setIsRefreshing(false);
  };

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <ImageBackground
      source={require('../../7_shared/assets/icons/png/Mask.png')}
      style={styles.desk}>
      <FlatList
        data={columns}
        onRefresh={handleRefresh}
        refreshing={isRefreshing}
        renderItem={column => (
          <DeskCard
            name={column.item.title}
            onPress={() => {
              navigation.navigate('myPrayers', {
                columnName: column.item.title,
                columnId: column.item.id,
              });
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
};
