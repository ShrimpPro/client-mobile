import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigators/TabNavigator';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>
  );
}