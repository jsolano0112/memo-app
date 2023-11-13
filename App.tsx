import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInGoogle from './views/SignInGoogle';
import Home from './views/Home';
import VinculateFriend from './views/VinculateFriend';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInGoogle} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VinculateFriend" component={VinculateFriend} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
