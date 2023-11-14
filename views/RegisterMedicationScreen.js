import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';
import SelectDropdown from 'react-native-select-dropdown';

const RegisterMedicationScreen = () => {
  const optionsTipoMed = [
    'Comprimido',
    'Cápsula',
    'Cápsula blanda',
    'Inyección',
    'Jarabe',
    'Suspención',
    'Crema',
    'Gotas',
    'Inhalador',
    'Óvulos',
  ];
  const optionsViaAdmin = [
    'Oral',
    'Inyectable',
    'Tópico',
    'Ótico',
    'Optálmico',
    'Inhalado',
    'Rectal',
    'Intravaginal',
  ];

  return (
    <ScrollView>
      <View style={style.container}>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            padding: 10,
            textAlign: 'center',
          }}>
          Registro de medicamentos
        </Text>

        <View style={style.group}>
          <Text style={style.text}>Nombre: </Text>
          <TextInput style={style.textinput} placeholder="Ej: Acetaminofén" />
        </View>

        <View style={style.group}>
          <Text style={style.text}>Dosis: </Text>
          <TextInput style={style.textinput} placeholder="Ej: 2 comprimidos" />
        </View>

        <View style={style.group}>
          <Text style={style.text}>Tipo Med: </Text>
          <SelectDropdown
            defaultButtonText="Seleccione"
            data={optionsTipoMed}
            onSelect={(selectItem, index) => {
              console.log(selectItem, index);
            }}
            buttonTextAfterSelection={(selectItem, index) => {
              return selectItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={style.dropdown1BtnStyle}
            buttonTextStyle={style.dropdown1BtnTxtStyle}
          />
        </View>

        <View style={style.group}>
          <Text style={style.text}>Tipo Med: </Text>
          <SelectDropdown
            defaultButtonText="Seleccione"
            data={optionsViaAdmin}
            onSelect={(selectItem, index) => {
              console.log(selectItem, index);
            }}
            buttonTextAfterSelection={(selectItem, index) => {
              return selectItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={style.dropdown1BtnStyle}
            buttonTextStyle={style.dropdown1BtnTxtStyle}
          />
        </View>

        <View style={style.group}>
          <Text style={style.text}>Fecha inicial: </Text>
          <TextInput style={style.textinput} placeholder="DD/MM/AAAA" />
        </View>

        <View style={style.group}>
          <Text style={style.text}>Hora inicial: </Text>
          <TextInput style={style.textinput} placeholder="Ej: 8:00 am" />
        </View>

        <View style={style.group}>
          <Text style={style.text}>Repetir: </Text>
          <TextInput style={style.textinput} placeholder="Ej: Cada 6 horas" />
        </View>

        <View style={style.group}>
          <Text style={style.text}>Duracción desde{'\n'} fecha incial: </Text>
          <TextInput style={style.textinput} placeholder="Ej: 7 días" />
        </View>

        <View style={style.group}>
          <Text style={style.text}>🔔 Alarma: </Text>
          <TextInput style={style.textinput} placeholder="Ej: 5 min antes" />
        </View>

        <View style={style.group}>
          <Text style={style.text}>⏳ Posponer: </Text>
          <TextInput style={style.textinput} placeholder="Ej: 3 min, 3 veces" />
        </View>

        <View style={style.group}>
          <Pressable
            style={[style.containerPressable, {backgroundColor: '#00A897'}]}>
            <Text style={style.textPressable}>Guardar</Text>
          </Pressable>
          <Pressable
            style={[style.containerPressable, {backgroundColor: '#00A897'}]}>
            <Text style={style.textPressable}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

/*
#00A897
#62C0BF
#91D4CF
#C9E8E4
#F5FAF5
*/
const style = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    //textAlign: 'left',
    //paddingLeft: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#C9E8E4',
    justifyContent: 'center',
    //alignItems: 'flex-start',
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    borderRadius: 8,
    //backgroundColor: 'white',
    padding: 6,
    //elevation: 4,
    //shadowColor: '#000',
    //shadowOffset: {
    //  width: 0,
    //  height: 2,
    //},
    //shadowOpacity: 0.25,
    //shadowRadius: 3.84,
  },
  textinput: {
    textAlign: 'center',
    height: 40,
    width: '50%',
    //textAlignVertical: 'center',
    backgroundColor: 'white',
    //marginLeft: 10,
    borderColor: '#00A897',
    borderWidth: 1,
    borderRadius: 10,
  },
  dropdown1BtnStyle: {
    width: '50%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00A897',
    marginRight: 20,
  },
  dropdown1BtnTxtStyle: {color: 'grey', textAlign: 'center'},
  containerPressable: {
    backgroundColor: '#B9C0D5',
    width: '45%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  textPressable: {
    fontWeight: 'bold',
    color: 'black',
  },
});
export default RegisterMedicationScreen;
