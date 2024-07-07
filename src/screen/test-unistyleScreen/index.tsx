import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TextInput, View, Text } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "~/navigation/types";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { Button, Div } from "~/uiLib/responsiveMagnus";
import commonStylesheet from "~/theme/commonStyles";

export default function TestUnistyleScreen() {
  const { styles } = useStyles(stylesheet);
  const { styles: commonStyles } = useStyles(commonStylesheet);

  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <Div flex={1} style={styles.container}>
      <Button
        style={commonStyles.button}
        onPress={() =>
          UnistylesRuntime.setTheme(
            UnistylesRuntime.themeName === "blueTheme"
              ? "pinkTheme"
              : "blueTheme"
          )
        }
      >
        Change Theme
      </Button>

      <Button style={commonStyles.button} onPress={() => navigation.goBack()}>
        Go Back
      </Button>
    </Div>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.mainColorTiny,
  },
  button: {
    backgroundColor: theme.colors.mainColor,
  },
}));
