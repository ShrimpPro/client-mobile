import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigators/TabNavigator";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { Provider } from "react-redux";
import store from "./screens/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RegisterScreen />
      </NavigationContainer>
    </Provider>
  );
}
