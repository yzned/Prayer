import {View, FlatList, ImageBackground} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';
import {DeskType} from '../../7_shared/api/axios/types/responseTypes';
import {DeskCard} from '../../7_shared/UI/DeskCard/DeskCard';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
type DeskProps = {
  desks?: DeskType[];
};
export const DeskList: FC<DeskProps> = ({desks}) => {
  const styles = getStyles(colors);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <ImageBackground
      source={require('../../7_shared/assets/icons/png/Mask.png')}
      style={styles.desk}>
      <FlatList
        data={desks}
        renderItem={desk => (
          <DeskCard
            name={desk.item.name}
            onPress={() => {
              navigation.navigate('userDesk', {
                userName: desk.item.name,
                deskId: desk.item.id,
              });
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
};
