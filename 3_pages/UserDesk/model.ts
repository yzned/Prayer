import {useEffect, useState} from 'react';
import {ColumnType} from '../../7_shared/api/axios/types/responseTypes';
import {getColumnsRequest} from '../../7_shared/api/axios/requests/Columns';

export const useGetColumns = (deskId: number) => {
  const [columns, setColumn] = useState<ColumnType[]>();
  const fetchData = async () => {
    try {
      const response = await getColumnsRequest({
        limit: 1000,
        afterCursor: '',
        deskId,
      });
      setColumn(response.data);
    } catch (error) {
      return console.error('Error occurred:', error);
    }
  };
  useEffect(() => {
    if (deskId) {
      fetchData();
    }
  }, [deskId]);
  return {columns, fetchData};
};
