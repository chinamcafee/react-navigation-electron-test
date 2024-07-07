import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenNavigationProp } from '~/navigation/types';
import { Button } from '~/uiLib/responsiveMagnus';

export default function HomeTabScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>This is HomeTabScreen!</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
