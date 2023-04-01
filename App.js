import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import store from "./store";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import blueTheme from "./assets/colors";
import { useFonts } from "expo-font";
import MainStack from "./navigators/MainStack";

export default function App() {
  const lightTheme = {
    ...DefaultTheme,
    ...blueTheme,
  };

  const darkTheme = {
    ...DefaultTheme,
    ...blueTheme,
    dark: true,
  };

  // let [fontsLoaded] = useFonts({
  //   "Poppins-Black": require("./assets/fonts/P"),
  // });

  // if (fontsLoaded) {
  return (
    <Provider store={store}>
      <PaperProvider theme={lightTheme}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
  // }
}
