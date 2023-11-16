import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInGoogle from './views/SignInGoogle';
import Home from './views/Home';
import VinculateFriend from './views/VinculateFriend';
import StatusControlScreen from './views/StatusControlScreen';
import RegisterMedicationScreen from './views/RegisterMedicationScreen';
import CalendarScreen from './views/Calendar';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInGoogle} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="VinculateFriend" component={VinculateFriend} />
        <Stack.Screen name="StatusControlScreen" component={StatusControlScreen} />
        <Stack.Screen name="RegisterMedicationScreen" component={RegisterMedicationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
