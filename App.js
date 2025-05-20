import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListHome from './src/screens/ListHome';
import DetailsScreen from './src/screens/DetailsScreen';


Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={ListHome}
        options={{ title: 'Bienvenido' }}
        />
        <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
