import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";
const Stack = createNativeStackNavigator();
import { useTheme } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";

export default function MainStack() {
  const { colors } = useTheme();
  
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        name="Landing Page"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={TabNavigator} />
    </Stack.Navigator>
  );
}
