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
import PaymentScreen from "../screens/PaymentScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrderScreen from "../screens/OrderScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import CategoryScreen from "../components/CategoryScreen";

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Landing Page"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Landing Page"
        component={WelcomeScreen}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Dashboard"
        component={TabNavigator}
      />
      <Stack.Screen name="Detail Mitra" component={DetailMitra} />
      <Stack.Screen name="List Mitra" component={MitraListScreen} />
      <Stack.Screen name="Tambah Panen" component={AddHarvestScreen} />
      <Stack.Screen name="Detail Harvest" component={HarvestDetailScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
}
