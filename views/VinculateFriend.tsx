import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../styles/globalStyles';
import InputComponent from '../components/InputComponent';
import {useForm} from 'react-hook-form';
import ButtonComponent from '../components/ButtonComponent';
function VinculateFriend() {
  const {control, handleSubmit, reset} = useForm();
  const [friend, setFriend] = useState([]);
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const vinculate = data => {
    const enteredEmail = data.correo;
    console.log('Entered Email:', enteredEmail);
    setFriend(prevState => [...prevState, enteredEmail]);
    reset();
  };
  const deleteFriend = index => {
    const updatedFriends = [...friend];
    updatedFriends.splice(index, 1);
    setFriend(updatedFriends);
  };
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Deseas vincular a un compañero?</Text>
      </View>
      <View style={styles.containerTwo}>
        <Text style={{color:'blue'}}>Términos y condiciones</Text>
        <Text>Ingresa el correo de tu compañero</Text>
        <InputComponent
          name="correo"
          placeholder="correo electrónico"
          secureTextEntry={false}
          control={control}
          rules={{
            maxLength: {
              value: 30,
              message: 'Text should be maximum 30 characters long',
            },
            pattern: {
              value: EMAIL_REGEX,
              message: 'Email is invalid',
            },
          }}
        />
        <ButtonComponent text="Vincular" onPress={handleSubmit(vinculate)} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Compañeros vinculados</Text>
        {friend.map((email, index) => (
          <View key={index} style={styles.friendContainer}>
            <Text style={{color: 'black'}}>{email} | </Text>
            <TouchableOpacity onPress={() => deleteFriend(index)}>
              <Text style={styles.deleteButton}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginVertical: 17,
  },
  containerTwo: {
    paddingHorizontal: 10,
  },
  friendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  deleteButton: {
    color: 'red',
  },
});
export default VinculateFriend;
