import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  // Button,
  TextInput,
  View,
  Text,
} from "react-native";
import { useMMKV, useMMKVString } from "react-native-mmkv";
import { useQuery, useRealm } from "~/storage/realm/realmConfig";
import { useState } from "react";
import { Profile } from "~/storage/realm/model/Profile";
import { BSON } from "realm";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "~/navigation/types";
import { Button } from "~/uiLib/responsiveMagnus";
import commonStylesheet from "~/theme/commonStyles";
import { useStyles } from "react-native-unistyles";


export default function TestRealmMMKVScreen() {
  const userStorage = useMMKV({ id: "user-storage-lq-0325" });
  const [username, setUsername] = useMMKVString("init", userStorage);

  const [username2, setUsername2] = useMMKVString("init");
  const realm = useRealm();
  const [profileName, setProfileName] = useState("");

  const navigation = useNavigation<ScreenNavigationProp>();

  const { styles: commonStyles } = useStyles(commonStylesheet)
  const addProfile = () => {
    realm.write(() => {
      realm.create(Profile, {
        _id: new BSON.ObjectId(),
        name: profileName,
      });
    });
  };

  const profiles = useQuery(Profile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MMKV custom ID userName is {username}</Text>
      <Text style={styles.title}>MMKV default userName is {username2}</Text>

      <View style={styles.separator} />
      <Button
        onPress={() => {
          if (profileName.length > 0) setUsername(profileName);
        }}
      >Set To custom MMKV</Button>

      <Button
        onPress={() => {
          if (profileName.length > 0) setUsername2(profileName);
        }}
      >Set To default MMKV</Button>

      <Text>Create</Text>
      <TextInput
        onChangeText={setProfileName}
        value={profileName}
        placeholder="Profile name..."
        style={{ fontSize: 25, marginVertical: 10 }}
      />
      <Button onPress={addProfile}>Add Profile</Button>

      <Button
        onPress={() => {
          console.log(profiles);
        }}
      >Query Profiles</Button>

      <Button
        style={commonStyles.button}
        onPress={() =>
          navigation.goBack()
        }
      >
        Go Back
      </Button>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
