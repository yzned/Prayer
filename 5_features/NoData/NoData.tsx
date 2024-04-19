import {getStyles} from './styles';
import {colors} from '../../7_shared/Colors/colors';
import {Text, View} from 'react-native';
import SvgSketch from '../../../--no-index/sketch';
import SvgArrow from '../../../--no-index/arrow';
import {FC} from 'react';
type NoDataType = {
  name: string;
};
export const NoData: FC<NoDataType> = ({name}) => {
  const styles = getStyles(colors);
  return (
    <View>
      <View style={styles.sketch}>
        <SvgSketch />
      </View>
      <Text style={styles.text}>You haven't created any {name}.</Text>
      <View style={styles.arrow}>
        <SvgArrow />
      </View>
    </View>
  );
};
