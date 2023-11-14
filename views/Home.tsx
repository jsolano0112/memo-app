import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {SimpleModal} from '../components/SimpleModal';
function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState();
  const changeModalVisible = bool => {
    setIsModalVisible(bool);
  };

  const setData = data => {
    setChooseData(data);
  }
  return (
    <SafeAreaView
      style={{
        ...globalStyles.container,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>{chooseData}</Text>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => changeModalVisible(true)}>
        <Text style={styles.text}>Abrir Modal</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisible(false)}>
        <SimpleModal
          changeModalVisible={changeModalVisible}
          setData={setData}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#161924',
    fontSize: 20,
    fontWeight: '500',
  },
  touchableOpacity: {
    backgroundColor: 'white',
    paddingHorizontal: 50,
  },
});
export default Home;
