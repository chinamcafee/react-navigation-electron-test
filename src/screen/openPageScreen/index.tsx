import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ScreenNavigationProp } from "~/navigation/types";
import { Button, Div } from "~/uiLib/responsiveMagnus";

export default function OpenPage() {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>OpenPage start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        Go To Home Tab
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("TestRealmMMKV");
        }}
      >
        Go To RealmMMKV Screen
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("TestUnistyle");
        }}
      >
        Go To TestUnistyle Screen
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
