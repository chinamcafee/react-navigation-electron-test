import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export interface TestComponentProps {
    name: string;
}
export default function TestComponent() {
  return (
    <View style={styles.container}>
      <Text>This is a test component</Text>
      {/* <StatusBar style="auto" /> */}
    
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