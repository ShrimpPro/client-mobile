import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Chip, IconButton, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as SecureStore from "expo-secure-store";
import { CommonActions } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { resetPonds } from "../store/actions/actionPond";
import { resetUsers } from "../store/actions/actionUser";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SettingsScreen({ navigation }) {
  const dispatch = useDispatch();

  const handlerLogout = async () => {
    await SecureStore.deleteItemAsync("access_token");
    dispatch(resetPonds());
    dispatch(resetUsers());
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Login" }],
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlerLogout}>
          <Card mode="elevated" style={{ backgroundColor: "white" }}>
            <Card.Content>
              <Chip icon={"logout"} style={{ backgroundColor: "white" }}>
                Logout
              </Chip>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
