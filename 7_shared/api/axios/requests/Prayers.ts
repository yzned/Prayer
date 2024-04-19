import {
  CreateCommentPayload,
  CreatePrayerPayload,
  CreatePrayerResponse,
  DeletePrayerPayload,
  DoPrayPayload,
  DoPrayResponse,
  DoSubscribePayload,
  DoSubscribeResponse,
  GetCommentsPayload,
  GetCommentsResponse,
  GetPrayerPayload,
  GetPrayersPayload,
  GetPrayersResponse,
  GetSubscribedPrayersResponse,
  RemovePrayerResponse,
  createCommentResponse,
} from '../types/responseTypes';
import {prayerApi} from '../client';

export const getPrayersRequest = async (
  columnId: GetPrayersPayload['columnId'],
) => {
  const {data} = await prayerApi.get<GetPrayersResponse>(
    `/columns/${columnId}/prayers`,
  );
  return data;
};

export const getPrayerRequest = async (id: GetPrayerPayload['id']) => {
  const {data} = await prayerApi.get<GetPrayersResponse>(`/prayers/${id}`);
  return data;
};

export const getSubscribedPrayersRequest = async () => {
  const {data} = await prayerApi.get<GetSubscribedPrayersResponse>(
    '/subscribed-prayers',
  );
  return data;
};

export const createPrayerRequest = async (values: CreatePrayerPayload) => {
  const {data} = await prayerApi.post<CreatePrayerResponse>(
    `/columns/${values.columnId}/prayers`,
    {
      title: values.title,
      description: values.description,
    },
  );
  return data;
};

export const deletePrayerRequest = async (id: DeletePrayerPayload) => {
  const {data} = await prayerApi.delete<RemovePrayerResponse>(`/prayers/${id}`);
  return data;
};

export const completePrayRequest = async (id: DoPrayPayload) => {
  const {data} = await prayerApi.post<DoPrayResponse>(
    `/prayers/${id}/complete`,
  );
  return data;
};
export const doPrayRequest = async (id: DoPrayPayload) => {
  const {data} = await prayerApi.post<DoPrayResponse>(`/prayers/${id}/do`);
  return data;
};
export const subscribeRequest = async (id: DoSubscribePayload) => {
  const {data} = await prayerApi.post<DoSubscribeResponse>(
    `/prayers/${id}/subscribe`,
  );
  return data;
};
export const unsubscribeRequest = async (id: DoSubscribePayload) => {
  const {data} = await prayerApi.delete<DoSubscribeResponse>(
    `/prayers/${id}/subscribe`,
  );
  return data;
};

export const getCommentsRequest = async ({
  id,
  limit,
  afterCursor,
}: GetCommentsPayload) => {
  const {data} = await prayerApi.get<GetCommentsResponse>(
    `/prayers/${id}/comments`,
    {
      params: {
        limit,
        afterCursor,
      },
    },
  );
  return data;
};

export const createCommentsRequest = async (values: CreateCommentPayload) => {
  try {
    const {data} = await prayerApi.post<createCommentResponse>(
      `/prayers/${values.prayerId}/comments`,
      {
        body: values.body,
      },
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
