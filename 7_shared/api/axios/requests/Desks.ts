import axios from 'axios';
import {
  GetDesksPayload,
  GetDesksResponse,
  GetOwnDeskResponse,
} from '../types/responseTypes';
import {prayerApi} from '../client';

export const getDesksRequest = async ({
  limit,
  afterCursor,
}: GetDesksPayload) => {
  const {data} = await prayerApi.get<GetDesksResponse>(`/desks`, {
    params: {
      limit,
      afterCursor,
    },
  });
  return data;
};

export const getOwnDeskRequest = async () => {
  const {data} = await prayerApi.get<GetOwnDeskResponse>('/desks/my');
  return data;
};
