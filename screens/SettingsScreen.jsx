import { View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
}
