import {Modal, View} from 'react-native';
import React, {FC, useState} from 'react';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';
import {PlusButton} from '../../7_shared/UI/iconButtons/PlusButton/PlusButton';
import {CreatePrayerModal} from '../CreatePrayerModal/CreatePrayerModal';
type CreatePrayerTypes = {
  columnId: number;
  fetchPrayers: () => Promise<void>;
};
export const CreatePrayer: FC<CreatePrayerTypes> = ({
  columnId,
  fetchPrayers,
}) => {
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
        <CreatePrayerModal
          setModalVisible={setModalVisible}
          columnId={columnId}
          fetchPrayers={fetchPrayers}
        />
      </Modal>
    </View>
  );
};
