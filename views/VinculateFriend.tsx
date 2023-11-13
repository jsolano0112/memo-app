import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles';
import InputComponent from '../components/InputComponent';
import {useForm} from 'react-hook-form';
import ButtonComponent from '../components/ButtonComponent';
function VinculateFriend() {
  const {control, handleSubmit, reset} = useForm();
  const vinculate = () => {};
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>¿Deseas vincular a un compañero?</Text>
      </View>
      <View style={styles.containerTwo}>
        <Text>Términos y condiciones</Text>
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
          }}
        />
        <ButtonComponent text="Vincular" onPress={handleSubmit(vinculate)} />
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
    marginVertical: 5,
  },
  containerTwo: {
    paddingHorizontal: 10,
  }
});
export default VinculateFriend;
