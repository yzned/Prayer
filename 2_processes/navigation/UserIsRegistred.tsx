import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getStyles} from './styles';
import {colors} from '../../7_shared/Colors/colors';
import UserDesks from '../../3_pages/UserDesksPage/UserDesks';
import Followed from '../../3_pages/Followed/Followed';
import {View, Text} from 'react-native';
import {MyDesk} from '../../3_pages/MyDesk/MyDesk';
import SvgMyDesk from '../../../--no-index/my-desk';
import SvgUnion from '../../../--no-index/union';
import SvgSubscribers from '../../../--no-index/subscribers';
import {UserDesk} from '../../3_pages/UserDesk/UserDesk';
import {Prayers} from '../../3_pages/Prayers/Prayers';
import {PrayerPage} from '../../3_pages/PrayerPage/PrayerPage';
import {MyPrayers} from '../../3_pages/MyPrayers/MyPrayers';
import {AuthorizedScreensParams} from '../../7_shared/navigation/params';
import {Routes} from '../../7_shared/navigation/MyRoutes';

const Tab = createBottomTabNavigator();
const MainScreen = () => {
  const styles = getStyles(colors);
  return (
    <Tab.Navigator
      initialRouteName="myDesk"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyles,
      }}>
      <Tab.Screen
        name="myDesk"
        component={MyDesk}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tapBarItem}>
              <SvgMyDesk
                color={
                  focused
                    ? styles.tapBarItemFocusedColor.color
                    : styles.pageName.color
                }
              />
              <Text
                style={[
                  styles.pageName,
                  focused && styles.tapBarItemFocusedColor,
                ]}>
                My desk
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="userDesks"
        component={UserDesks}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tapBarItem}>
              <SvgUnion
                color={
                  focused
                    ? styles.tapBarItemFocusedColor.color
                    : styles.pageName.color
                }
              />
              <View style={{marginTop: 3}}>
                <Text
                  style={[
                    styles.pageName,
                    focused && styles.tapBarItemFocusedColor,
                  ]}>
                  User desks
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="followed"
        component={Followed}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tapBarItem}>
              <SvgSubscribers
                color={
                  focused
                    ? styles.tapBarItemFocusedColor.color
                    : styles.pageName.color
                }
              />
              <Text
                style={[
                  styles.pageName,
                  focused && styles.tapBarItemFocusedColor,
                ]}>
                Followed
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const UserIsRegistred = () => {
  const Stack = createNativeStackNavigator<AuthorizedScreensParams>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.MainScreen}
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.userDesk}
        component={UserDesk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.prayers}
        component={Prayers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myPrayers}
        component={MyPrayers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.prayerPage}
        component={PrayerPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
