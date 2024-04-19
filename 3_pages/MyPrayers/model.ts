import {useEffect, useState} from 'react';
import {PrayerType} from '../../7_shared/api/axios/types/responseTypes';
import {getPrayersRequest} from '../../7_shared/api/axios/requests/Prayers';
interface PrayersContextData {
  refetchPrayers: () => void;
}
export const useGetPrayers = (columnId: number) => {
  const [prayers, setPrayers] = useState<PrayerType[]>();
  const fetchPrayers = async () => {
    try {
      const response = await getPrayersRequest(columnId);
      setPrayers(response);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  useEffect(() => {
    if (columnId) {
      fetchPrayers();
    }
  }, [columnId]);

  return {prayers, fetchPrayers};
};
