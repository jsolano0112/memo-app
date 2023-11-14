import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
        // const {idToken} = await GoogleSignin.signIn();
        // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // const userSignIn = await auth().signInWithCredential(googleCredential);

        // console.log('Usuario autenticado:', userSignIn.user);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../styles/assets/MEMO.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={signInWithGoogleAsync}>
        <Text style={styles.title}> Sign In with Google</Text>
        <Image
          source={require('../styles/assets/iconogoogle.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#91D4CF',
    padding: 10,
    borderRadius: 5,
  },
  buttonImage: {
    width: 70,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginVertical: 17,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default SignInGoogle;
