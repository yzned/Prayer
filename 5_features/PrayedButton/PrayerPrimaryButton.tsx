import {Modal, View} from 'react-native';
import React, {FC, useState} from 'react';
import {PrimaryButton} from '../../7_shared/UI/buttons/primaryButton/PrimaryButton';
import {doPrayRequest} from '../../7_shared/api/axios/requests/Prayers';
import {ModalCounter} from '../ModalCounter/ModalCounter';
type PrayerPrimaryTypes = {
  prayerId: number;
};
export const PrayerPrimaryButton: FC<PrayerPrimaryTypes> = ({prayerId}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const completePrayer = async () => {
    try {
      await doPrayRequest(prayerId);
    } catch (error) {
      setModalVisible(true);
    }
  };
  return (
    <View>
      <PrimaryButton name="Prayed" onPress={completePrayer} />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ModalCounter setModalVisible={setModalVisible} />
      </Modal>
    </View>
  );
};
