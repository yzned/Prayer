import {useEffect, useState} from 'react';
import {PrayerType} from '../../7_shared/api/axios/types/responseTypes';
import {getPrayerRequest} from '../../7_shared/api/axios/requests/Prayers';

export const useprayerInformation = (prayerId: number) => {
  const [prayerInformation, setPrayerInformation] = useState<PrayerType[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPrayerRequest(prayerId);
        setPrayerInformation(response);
      } catch (error) {
        return console.error('Error occurred:', error);
      }
    };
    if (prayerId) {
      fetchData();
    }
  }, [prayerId]);
  return prayerInformation;
};
