import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";
const Stack = createNativeStackNavigator();
import WelcomeScreen from "../screens/WelcomeScreen";
import DetailMitra from "../screens/DetailMitra";
import MitraListScreen from "../screens/MitraListScreen";
import AddHarvestScreen from "../screens/AddHarvestScreen";
import HarvestDetailScreen from "../screens/HarvestDetailScreen";

export default function MainStack() {
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
      <Stack.Screen name="Detail Mitra" component={DetailMitra} />
      <Stack.Screen name="List Mitra" component={MitraListScreen} />
      <Stack.Screen name="Tambah Panen" component={AddHarvestScreen} />
      <Stack.Screen name="Detail Harvest" component={HarvestDetailScreen} />
    </Stack.Navigator>
  );
}
