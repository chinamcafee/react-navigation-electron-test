import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  OpenPage: undefined;
  TestJPush: undefined;
  TestRealmMMKV: undefined;
  TestUnistyle: undefined;
};

export type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;