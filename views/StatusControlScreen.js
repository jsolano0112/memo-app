import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useState,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

const StatusControlScreen = () => {
  const navigation = useNavigation();

  const [answerOne, setAnswerOne] = React.useState(null);
  const [answerTwo, setAnswerTwo] = React.useState(null);
  const [answerFour, setAnswerFour] = React.useState(null);
  const [answerFive, setAnswerFive] = React.useState(null);
  const [answerSeven, setAnswerSeven] = React.useState(null);

  const optionsOne = ['😀', '😐', '😭', '😡', '🤮', '😕'];
  const optionsTwo = ['😀', '😭'];
  const optionsThree = [
    'No he consumido',
    'Aguardiente',
    'Ron',
    'Whisky',
    'Cerveza',
    'Otro',
  ];
  const optionsFour = ['😊', '😜', '😵', '🤢', '🤮'];
  const optionsSix = [
    'No he consumido',
    'Cannabis',
    'Cocaína',
    'Anfetaminas',
    'Alucinogenos',
    'Otro',
  ];
  const optionsEight = [
    'No he consumido',
    'De 1-4 cigarrillos',
    'De 4-9 cigarrillos',
    'Media cajetilla',
    'De 10-15 cigarrillos',
    'Cajetilla o más',
  ];

  const handleSelectionOptionOne = option => {
    setAnswerOne(option);
  };

  const handleSelectionOptionTwo = option => {
    setAnswerTwo(option);
  };

  const handleSelectionOptionFour = option => {
    setAnswerFour(option);
  };

  const handleSelectionOptionFive = option => {
    setAnswerFive(option);
  };

  const handleSelectionOptionSeven = option => {
    setAnswerSeven(option);
  };

  return (
    <ScrollView>
      <View style={style.container}>
        {/*Question One */}
        <Text style={style.title}>¿Cómo te sientes hoy?</Text>
        <View style={style.group}>
          {optionsOne.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectionOptionOne(option)}
              style={{
                borderWidth: 0,
                borderColor: answerOne === option ? '#00A897' : 'grey',
                padding: 1,
                margin: 1,
              }}>
              <Text style={style.text}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {answerOne && (
          <View>
            <Text>Opción seleccionada: {answerOne}</Text>
          </View>
        )}
        {/*End Question One */}

        {/*Question Two */}
        <Text style={style.title}>
          ¿Has consumido alguna bebida alcohólica últimamente?
        </Text>

        <View style={style.group}>
          {optionsTwo.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectionOptionTwo(option)}
              style={{
                borderWidth: 2,
                borderColor: answerTwo === option ? '#00A897' : 'grey',
                padding: 10,
                margin: 10,
              }}>
              <Text style={style.text}>{option}</Text>
              <Text style={{fontSize: 40, textAlign: 'center', color: 'black'}}>
                {index == 0 ? 'Si' : 'No'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {answerTwo && (
          <View>
            <Text>Opción seleccionada: {answerTwo}</Text>
          </View>
        )}
        {/*End Question Two */}

        {/*Question Three */}
        <Text style={style.title}>¿Qué bebida alcohólica consumiste?</Text>

        <View style={style.group}>
          <SelectDropdown
            defaultButtonText="Selecciona     ◀"
            data={optionsThree}
            onSelect={(selectItem, index) => {
              console.log(selectItem, index);
            }}
            buttonTextAfterSelection={(selectItem, index) => {
              return selectItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>

        {/*End Question Three */}

        {/*Question Four */}
        <Text style={style.title}>¿Cuánto alcohol consumiste?</Text>
        <View style={style.group}>
          {optionsFour.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectionOptionFour(option)}
              style={{
                borderWidth: 0,
                borderColor: answerFour === option ? '#00A897' : 'grey',
                padding: 1,
                margin: 1,
              }}>
              <Text style={style.text}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {answerFour && (
          <View>
            <Text>Opción seleccionada: {answerFour}</Text>
          </View>
        )}
        {/*End Question Four */}

        {/* Question Five */}
        <Text style={style.title}>
          ¿Has consumido alguna sustancia psicoactiva últimamente?
        </Text>

        <View style={style.group}>
          {optionsTwo.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectionOptionFive(option)}
              style={{
                borderWidth: 2,
                borderColor: answerFive === option ? '#00A897' : 'grey',
                padding: 10,
                margin: 10,
              }}>
              <Text style={style.text}>{option}</Text>
              <Text style={{fontSize: 40, textAlign: 'center', color: 'black'}}>
                {index == 0 ? 'Si' : 'No'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {answerFive && (
          <View>
            <Text>Opción seleccionada: {answerFive}</Text>
          </View>
        )}
        {/* End Question Five */}

        {/* Question Six */}
        <Text style={style.title}>¿Qué sustancia psicoactiva consumiste?</Text>

        <View style={style.group}>
          <SelectDropdown
            defaultButtonText="Selecciona     ◀"
            data={optionsSix}
            onSelect={(selectItem, index) => {
              console.log(selectItem, index);
            }}
            buttonTextAfterSelection={(selectItem, index) => {
              return selectItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        {/* End Question six */}

        {/* Question Seven */}
        <Text style={style.title}>¿Has consumido tabaco últimamente?</Text>

        <View style={style.group}>
          {optionsTwo.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectionOptionSeven(option)}
              style={{
                borderWidth: 2,
                borderColor: answerSeven === option ? '#00A897' : 'grey',
                padding: 10,
                margin: 10,
              }}>
              <Text style={style.text}>{option}</Text>
              <Text style={{fontSize: 40, textAlign: 'center', color: 'black'}}>
                {index == 0 ? 'Si' : 'No'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {answerSeven && (
          <View>
            <Text>Opción seleccionada: {answerSeven}</Text>
          </View>
        )}
        {/* End Question Seven */}

        {/* Question Eight */}
        <Text style={style.title}>¿Cuánto tabaco consumiste?</Text>

        <View style={style.group}>
          <SelectDropdown
            defaultButtonText="Selecciona     ◀"
            data={optionsEight}
            onSelect={(selectItem, index) => {
              console.log(selectItem, index);
            }}
            buttonTextAfterSelection={(selectItem, index) => {
              return selectItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        {/* End Question Eight */}

        {/* Question Nine */}
        <Text style={style.title}>¿Algo que agregar?</Text>
        <View style={style.group}>
          <TextInput
            style={{
              height: 150,
              width: 250,
              textAlignVertical: 'top',
              backgroundColor: 'white',
            }}
            multiline={true}
            numberOfLines={5}
            //underlineColorAndroid='transparent'
            placeholder="Cuentanos..."
            //onChangeText={(text)=>this.setState({text})}
            //value={this.state.text}
          />
        </View>
        {/* End Question Nine */}

        <View style={style.group}>
        {/* 
          <Button
            style={{padding: 10, margin: 15}}
            onPress={console.log('ᓚᘏᗢ')}
            title="Enviar"
            color="#00A897"
          />
        */}

          <ButtonComponent text="Enviar" onPress={()=>{navigation.navigate('Home')}}/>

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
    fontSize: 60,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#C9E8E4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 8,
    //backgroundColor: 'white',
    padding: 16,
    //elevation: 4,
    //shadowColor: '#000',
    //shadowOffset: {
    //  width: 0,
    //  height: 2,
    //},
    //shadowOpacity: 0.25,
    //shadowRadius: 3.84,
  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    paddingTop: 10,
    color: 'black',
  },
});

export default StatusControlScreen;
