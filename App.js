import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./store";
import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import blueTheme from "./assets/colors";
import { useFonts } from "expo-font";
import MainStack from "./navigators/MainStack";
import FlashMessage from "react-native-flash-message";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Calling getExpoPushTokenAsync without specifying a projectId is deprecated']);

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const fontConfig = {
    default: {
      regular: {
        fontFamily: "Poppins",
        fontWeight: "normal",
      },
      bold: {
        fontFamily: "Poppins-Bold",
        fontWeight: "normal",
      },
    },
  };

  const theme = {
    ...DefaultTheme,
    ...blueTheme,
    fonts: configureFonts({ fonts: fontConfig }),
  };

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <MainStack />
          <FlashMessage />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
  // }
}
