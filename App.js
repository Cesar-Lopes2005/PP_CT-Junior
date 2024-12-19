import Home from './src/pages/Home'
import Login from './src/pages/Login/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="TO DO LIST" component={Home}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
