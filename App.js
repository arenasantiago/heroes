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
        name="Lista personajes" 
        component={ListHome}
        //Quitar navbar
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Detalles de personajes" 
        component={DetailsScreen}
        options={{ headerShown: false }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
