import {Pressable, PressableProps, Text, View} from 'react-native';
import React, {FC} from 'react';
import {getStyles} from './styles';
import {colors} from '../../7_shared/Colors/colors';
import {PrimaryButton} from '../../7_shared/UI/buttons/primaryButton/PrimaryButton';
import {XmarkButton} from '../../7_shared/UI/iconButtons/XmarkButton/XmarkButton';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Input} from '../../7_shared/UI/input/input';
import {createPrayerRequest} from '../../7_shared/api/axios/requests/Prayers';
type CreatePrayerModalTypes = {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  columnId: number;
  fetchPrayers: () => Promise<void>;
} & PressableProps;
type FormValues = {
  title: string;
};
export const CreatePrayerModal: FC<CreatePrayerModalTypes> = ({
  columnId,
  setModalVisible,
  fetchPrayers,
}) => {
  const styles = getStyles(colors);
  const schema = yup.object({
    title: yup.string().required(),
  });
  const {...methods} = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const onSubmit = async ({title}: FormValues) => {
    try {
      await createPrayerRequest({description: title, title, columnId});
      fetchPrayers();
      setModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.modal}>
      <Pressable
        onPress={() => setModalVisible(false)}
        style={styles.backgroundClose}></Pressable>
      <View style={styles.modalContent}>
        <View style={styles.headPart}>
          <Text style={styles.modalName}>New prayer</Text>
          <XmarkButton onPress={() => setModalVisible(false)} />
        </View>
        <Controller
          control={methods.control}
          name="title"
          render={({field: {value, onChange}}) => (
            <View>
              <Input
                value={value}
                onChange={onChange}
                onPress={methods.handleSubmit(onSubmit)}
                placeholder="Enter title of prayer"
              />
            </View>
          )}
        />
        <PrimaryButton
          name="Add"
          onPress={methods.handleSubmit(onSubmit)}
          disabled={!methods.formState.isValid}
        />
      </View>
    </View>
  );
};
