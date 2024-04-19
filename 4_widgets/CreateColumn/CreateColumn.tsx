import {Modal, View} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';
import {PlusButton} from '../../7_shared/UI/iconButtons/PlusButton/PlusButton';
import {CreateColumnModal} from '../CreateColumnModal/CreateColumnModal';
type CreateColumnTypes = {
  fetchData: () => Promise<void>;
};
export const CreateColumn: FC<CreateColumnTypes> = ({fetchData}) => {
  const styles = getStyles(colors);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.createColumn}>
      <PlusButton onPress={() => setModalVisible(true)} />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <CreateColumnModal
          setModalVisible={setModalVisible}
          fetchData={fetchData}
        />
      </Modal>
    </View>
  );
};
