import {View} from 'react-native';
import React, {FC} from 'react';
import {DeleteButton} from '../../7_shared/UI/buttons/deleteButton/DeleteButton';
import {deletePrayerRequest} from '../../7_shared/api/axios/requests/Prayers';
type DeletePrayerProps = {
  prayerId: number;
  fetchPrayers: () => Promise<void>;
};
export const DeletePrayer: FC<DeletePrayerProps> = ({
  prayerId,
  fetchPrayers,
}) => {
  const deletePray = () => {
    deletePrayerRequest(prayerId);
    fetchPrayers();
  };
  return (
    <View>
      <DeleteButton onPress={deletePray} />
    </View>
  );
};
