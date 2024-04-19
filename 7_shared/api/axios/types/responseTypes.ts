export type ColumnType = {
  id: number;
  title: string;
  description: string;
  userId: UserType['id'];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type UserType = {
  id: number;
  email: string;
  name: string;
  isGreetings: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type DeskType = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type PrayerType = {
  id: number;
  title: string;
  description: string;
  userId: UserType['id'];
  columnId: ColumnType['id'];
  completesCount: number;
  subscribersCount: number;
  myPrayCount: number;
  otherPrayCount: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  subscribers?: UserType[];
  lastPrayerEvent?: {
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };
};

export type CommentType = {
  id: number;
  body: string;
  userId: UserType['id'];
  prayerId: PrayerType['id'];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type SignInResponse = {
  id: number;
  email: string;
  name: string;
  token: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type SignUpResponse = UserType & {
  token: string;
};

export type GetDesksResponse = {
  data: DeskType[];
  cursor: {
    afterCursor: string;
    beforeCursor: string;
  };
};

export type GetColumnsResponse = {
  data: ColumnType[];
  cursor: {
    afterCursor: string;
    beforeCursor: string;
  };
};

export type GetPrayersResponse = PrayerType[];

export type GetPrayerResponse = PrayerType;

export type GetSubscribedPrayersResponse = PrayerType[];

export type GetOwnDeskResponse = DeskType;

export type CreateColumnResponse = ColumnType;

export type RemoveColumnResponse = never;

export type CreatePrayerResponse = PrayerType;

export type RemovePrayerResponse = never;

export type DoPrayResponse = PrayerType;

export type GetCommentsResponse = {
  data: CommentType[];
  cursor: {
    afterCursor: string;
    beforeCursor: string;
  };
};

export type SignUpPayload = {
  email: string;
  name: string;
  password: string;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type GetDesksPayload = {
  limit: number;
  afterCursor?: string;
};

export type GetColumnsPayload = {
  limit: number;
  afterCursor?: string;
  deskId: DeskType['id'];
};

export type GetPrayersPayload = {
  columnId: ColumnType['id'];
};

export type GetPrayerPayload = {
  id: PrayerType['id'];
};

export type CreateColumnPayload = {
  title: string;
  description: string;
};

export type CreatePrayerPayload = {
  title: string;
  description: string;
  columnId?: ColumnType['id'];
};

export type CreateCommentPayload = {
  body: string;
  prayerId: PrayerType['id'];
};

export type DeleteColumnPayload = ColumnType['id'];

export type DeletePrayerPayload = PrayerType['id'];

export type DoPrayPayload = PrayerType['id'];

export type GetCommentsPayload = {
  id: CommentType['prayerId'];
  limit: number;
  afterCursor?: number;
};

export type DoSubscribePayload = PrayerType['id'];

export type DoUnsubscribePayload = PrayerType['id'];

export type GetSubscribedPrayersPayload = void;
export type createCommentResponse = CommentType;

export type DoSubscribeResponse = PrayerType;

export type DoUnsubscribeResponse = PrayerType;
