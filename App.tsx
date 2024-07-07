import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TestComponent, { TestComponentProps } from "~/component/testComponent";
import { AppNavigator } from "~/navigation/AppNavigator";
import { ThemeProvider, Div } from "~/uiLib/responsiveMagnus";
import "./src/assets/styles/fonts.css";
import { RealmProvider } from "~/storage/realm/realmConfig";
import { Profile } from "~/storage/realm/model/Profile";
import { UnistylesRegistry, useInitialTheme } from "react-native-unistyles";
import { breakpoints } from "~/theme/breakpoints";
import { blueTheme, pinkTheme } from "~/theme/themes";

export default function App() {
  UnistylesRegistry.addBreakpoints(breakpoints)
    .addThemes({
      pinkTheme: pinkTheme,
      blueTheme: blueTheme,
    })
    .addConfig({
      adaptiveThemes: true,
    });

  useInitialTheme("pinkTheme");

  return (
    <ThemeProvider>
      <RealmProvider schema={[Profile]}>
        <AppNavigator />
      </RealmProvider>
    </ThemeProvider>
  );
}