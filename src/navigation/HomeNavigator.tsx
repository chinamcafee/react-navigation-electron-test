import React from 'react';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import HomeTabScreen from "../screen/mainTabScreen/HomeTabScreen";
import SecondTabScreen from "../screen/mainTabScreen/SecondTabScreen";
import ThirdTabScreen from "../screen/mainTabScreen/ThirdTabScreen";
import FourthTabScreen from "../screen/mainTabScreen/FourthTabScreen";
import FifthTabScreen from "../screen/mainTabScreen/FifthTabScreen";
import { Platform } from 'react-native';

const BottomTab = createBottomTabNavigator();

const shouldDetachInactiveScreens = Platform.OS !== 'android';

export const HomeNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    initialRouteName={'HomeTab'}
    screenOptions={{ headerShown: false }}
    detachInactiveScreens={shouldDetachInactiveScreens}
  >
    <BottomTab.Screen name='HomeTab' component={HomeTabScreen} />
    <BottomTab.Screen name='SecondTab' component={SecondTabScreen} />
    <BottomTab.Screen name='ThirdTab' component={ThirdTabScreen} />
    <BottomTab.Screen name='FourthTab' component={FourthTabScreen} />
    <BottomTab.Screen name='FifthTab' component={FifthTabScreen} />

  </BottomTab.Navigator>
);