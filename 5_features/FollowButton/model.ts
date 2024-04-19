import {useEffect, useState} from 'react';
import {getSubscribedPrayersRequest} from '../../7_shared/api/axios/requests/Prayers';
import {GetSubscribedPrayersResponse} from '../../7_shared/api/axios/types/responseTypes';

export const useGetFollowedPrayers = () => {
  const [followed, setFollowed] = useState<GetSubscribedPrayersResponse>();
  const fetchData = async () => {
    try {
      const response = await getSubscribedPrayersRequest();
      setFollowed(response);
    } catch (error) {
      return console.error('Error occurred:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {followed, fetchData};
};
