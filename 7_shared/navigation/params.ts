import {Routes} from './MyRoutes';

export type AuthorizedScreensParams = {
  [Routes.myPrayers]: {
    columnId: number;
    columnName: string;
  };
  [Routes.MainScreen]: {};
  [Routes.userDesk]: {};
  [Routes.prayers]: {};
  [Routes.prayerPage]: {
    prayerName: string;
    prayerId: number;
    fetchData: () => Promise<void>;
  };
};

export type AppScreensParams = AuthorizedScreensParams;
