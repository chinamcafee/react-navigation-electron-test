import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OpenPage from "~/screen/openPageScreen";
import { HomeNavigator } from "./HomeNavigator";
import TestRealmMMKVScreen from "~/screen/test-realm-mmkvScreen";
import TestUnistyleScreen from "~/screen/test-unistyleScreen";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          // initialRouteName={GlobalConstant.LQStorage.navigationState? GlobalConstant.LQStorage.navigationState : "GenderLogin"}
          initialRouteName="OpenPage"
        >
          <Stack.Screen name="OpenPage" component={OpenPage} />
          <Stack.Screen name="Home" component={HomeNavigator} />




          <Stack.Screen name="TestRealmMMKV" component={TestRealmMMKVScreen} />
          <Stack.Screen name="TestUnistyle" component={TestUnistyleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
