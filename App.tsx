import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInGoogle from './views/SignInGoogle';
import Home from './views/Home';
import VinculateFriend from './views/VinculateFriend';
import StatusControlScreen from './views/StatusControlScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VinculateFriend">
        <Stack.Screen name="SignIn" component={SignInGoogle} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VinculateFriend" component={VinculateFriend} />
        <Stack.Screen name="StatusControlScreen" component={StatusControlScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
