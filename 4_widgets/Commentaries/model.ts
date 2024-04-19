import {useEffect, useState} from 'react';
import {CommentType} from '../../7_shared/api/axios/types/responseTypes';
import {getCommentsRequest} from '../../7_shared/api/axios/requests/Prayers';
export const useGetComments = (prayerId: number) => {
  const [comments, setComments] = useState<CommentType[]>();
  const fetchData = async () => {
    try {
      const response = await getCommentsRequest({limit: 100, id: prayerId});
      setComments(response.data);
    } catch (error) {
      return console.error('Error occurred:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {comments, fetchData};
};
