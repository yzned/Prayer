import {Pressable, PressableProps, Text, View} from 'react-native';
import React, {FC} from 'react';
import {getStyles} from './styles';
import {colors} from '../../7_shared/Colors/colors';
import {PrimaryButton} from '../../7_shared/UI/buttons/primaryButton/PrimaryButton';
type ModalCounter = {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
} & PressableProps;
export const ModalCounter: FC<ModalCounter> = ({setModalVisible}) => {
  const styles = getStyles(colors);
  return (
    <View style={styles.modal}>
      <Pressable
        onPress={() => setModalVisible(false)}
        style={styles.backgroundClose}></Pressable>
      <View style={styles.modalContent}>
        <Text style={styles.sorry}>Sorry!</Text>
        <Text style={styles.text}>
          The counter can be pressed once per hour.
        </Text>
        <PrimaryButton name="OK" onPress={() => setModalVisible(false)} />
      </View>
    </View>
  );
};
