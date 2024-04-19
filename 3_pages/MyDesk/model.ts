import {useEffect, useState} from 'react';
import {DeskType} from '../../7_shared/api/axios/types/responseTypes';
import {getOwnDeskRequest} from '../../7_shared/api/axios/requests/Desks';

export const useGetMyColumns = () => {
  const [myDesk, setMyDesk] = useState<DeskType>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOwnDeskRequest();
        setMyDesk(response);
      } catch (error) {
        return console.error('Error occurred:', error);
      }
    };
    fetchData();
  }, []);
  return myDesk;
};
