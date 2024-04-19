import {
  CreateColumnPayload,
  CreateColumnResponse,
  DeleteColumnPayload,
  GetColumnsPayload,
  GetColumnsResponse,
  RemoveColumnResponse,
} from '../types/responseTypes';
import {prayerApi} from '../client';

export const getColumnsRequest = async ({
  deskId,
  limit,
  afterCursor,
}: GetColumnsPayload) => {
  const {data} = await prayerApi.get<GetColumnsResponse>(
    `/desks/${deskId}/columns`,
    {
      params: {
        limit,
        afterCursor,
      },
    },
  );
  return data;
};

export const createColumnRequest = async (values: CreateColumnPayload) => {
  const {data} = await prayerApi.post<CreateColumnResponse>('/columns', values);
  return data;
};

export const removeColumnRequest = async (columnId: DeleteColumnPayload) => {
  const {data} = await prayerApi.delete<RemoveColumnResponse>(
    `/columns/${columnId}`,
  );
  return data;
};
