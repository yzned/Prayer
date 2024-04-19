import {NativeStackScreenProps} from 'react-native-screens/native-stack';

import {AuthorizedScreensParams} from './params';
import {Routes} from './MyRoutes';
export type MyPrayersScreenProps = NativeStackScreenProps<
  AuthorizedScreensParams,
  Routes.myPrayers
>;
