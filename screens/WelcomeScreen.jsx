import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image } from "react-native";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export default function WelcomeScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    SecureStore.getItemAsync("access_token").then((access_token) => {
      console.log(access_token);
      setIsLogin(true);
    });
  }, []);

  const partnerButton = () => {
    if (isLogin) return navigation.navigate("Dashboard");
    navigation.navigate("Login");
  };
  const penadahButton = () => {
    navigation.navigate("List Mitra");
  };

  return (
    <SafeAreaView
      style={{ paddingHorizontal: 15, flex: 1, justifyContent: "center" }}
    >
      <View style={{ paddingHorizontal: 10 }}>
        <Image
          style={{
            alignSelf: "center",
            width: 300,
            height: 200,
            marginBottom: 20,
          }}
          source={{
            uri: "https://cdn.discordapp.com/attachments/1089065643346776075/1090570170487025754/20230329_163617_0000.png",
          }}
        />
        <Text
          variant="headlineLarge"
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          ShrimpPro
        </Text>
        <Text
          variant="bodyMedium"
          style={{
            fontFamily: "Poppins",
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Button
            mode="contained"
            uppercase={true}
            style={{ borderRadius: 5 }}
            labelStyle={{ fontFamily: "Poppins-Bold" }}
            onPress={() => partnerButton()}
          >
            Penambak
          </Button>
          <Button
            mode="contained"
            uppercase={true}
            labelStyle={{ fontFamily: "Poppins-Bold" }}
            onPress={() => penadahButton()}
            style={{
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          >
            Penadah
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
