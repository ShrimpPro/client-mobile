import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";

export default function SettingsScreen({ navigation }) {
  const dispatch = useDispatch();

  const handlerLogout = async () => {
    await SecureStore.deleteItemAsync("access_token");
    dispatch({ type: "LOGOUT" });
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.play}>
          <IconButton
            onPress={handlerLogout}
            icon={() => <Icon name="logout" size={30} color="#000" />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  play: {
    position: "absolute",
    left: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
});
