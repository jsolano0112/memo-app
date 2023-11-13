import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

function SignInGoogle() {
  const navigation = useNavigation();
  GoogleSignin.configure({
    webClientId:
      '522578454092-rrnnt44i5ogn3sd98r7frc70ui3lso9h.apps.googleusercontent.com',
  });
  const signInWithGoogleAsync = async () => {
    try {
    //   const {idToken} = await GoogleSignin.signIn();
    //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //   const userSignIn = await auth().signInWithCredential(googleCredential);

    //   console.log('Usuario autenticado:', userSignIn.user);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#91D4CF'}}>
      <Button title="Sign in with Google" onPress={signInWithGoogleAsync}/>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default SignInGoogle;
