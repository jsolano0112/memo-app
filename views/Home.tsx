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
import Sidebar from '../components/Sidebar';
function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState();
  const [selectedItem, setSelectedItem] = useState('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const changeModalVisible = bool => {
    setIsModalVisible(bool);
  };

  const setData = data => {
    setChooseData(data);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarItemSelected = item => {
    setSelectedItem(item);
    setIsSidebarOpen(false);
  };
  return (
    <SafeAreaView
      style={{
        ...globalStyles.container,
      }}>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={handleSidebarToggle}
        selectedItem={selectedItem}
        onSelectItem={handleSidebarItemSelected}
      />
      <TouchableOpacity
        style={styles.toggleButton} // Agrega estilos según tus necesidades
        onPress={handleSidebarToggle}>
        <Text style={styles.text}>☰</Text>
      </TouchableOpacity>
      {/* <Text>{chooseData}</Text> */}
      {/* <TouchableOpacity
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
      </Modal> */}
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
  toggleButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
});
export default Home;
