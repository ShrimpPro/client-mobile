import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image } from "react-native";

export default function WelcomeScreen({ navigation }) {
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
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Penambak
          </Button>
          <Button
            mode="contained"
            uppercase={true}
            labelStyle={{ fontFamily: "Poppins-Bold" }}
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
