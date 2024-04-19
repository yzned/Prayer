import {useEffect, useState} from 'react';
import {getDesksRequest} from '../../7_shared/api/axios/requests/Desks';
import {DeskType} from '../../7_shared/api/axios/types/responseTypes';

export const useDesks = () => {
  const [desks, setDesks] = useState<DeskType[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDesksRequest({limit: 100, afterCursor: ''});
        setDesks(response.data);
      } catch (error) {
        return console.error('Error occurred:', error);
      }
    };
    fetchData();
  }, []);
  return desks;
};
