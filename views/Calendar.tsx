import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import Sidebar from '../components/Sidebar';
import useSideBar from '../hooks/use-sidebar';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';

export default function CalendarScreen() {
  const [isDaySelected, setIsDaySelected] = useState(true);
  const [dayData, setDayData] = useState(null);
  const [checkColor, setCheckColor] = useState('#005ea6');
  const navigation = useNavigation();

  const {
    handleSideBarNavigation,
    handleSidebarToggle,
    isSideBarOpen,
    selectedNavigationItem,
  } = useSideBar();

  const handleCheck = () => {
    setCheckColor('#00A897');
  };
  return (
    <View style={{...globalStyles.container}}>
      <Sidebar
        isOpen={isSideBarOpen}
        toggleSidebar={handleSidebarToggle}
        selectedItem={selectedNavigationItem}
        onSelectItem={handleSideBarNavigation}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={handleSidebarToggle}>
        <Text style={styles.text}>☰</Text>
      </TouchableOpacity>
      <Calendar
        markedDates={{
          '2023-11-15': {
            selected: true,
            marked: true,
            selectedColor: checkColor,
          },
          '2023-11-16': {
            selected: true,
            marked: true,
            selectedColor: '#4ea8ed',
            startingDay: true,
          },
          '2023-11-17': {
            selected: true,
            marked: true,
            selectedColor: '#4ea8ed',
          },
          '2023-11-18': {
            selected: true,
            marked: true,
            selectedColor: '#4ea8ed',
          },
          '2023-11-19': {
            selected: true,
            marked: true,
            selectedColor: '#4ea8ed',
          },
          '2023-11-20': {
            selected: true,
            marked: true,
            selectedColor: '#4ea8ed',
          },
          '2023-11-21': {
            selected: true,
            marked: true,
            selectedColor: '#4ea8ed',
          },
          '2023-11-22': {
            selected: true,
            marked: true,
            selectedColor: '#4ea8ed',
            endingDay: true,
          },
        }}
        onDayPress={day => {
          setIsDaySelected(!isDaySelected);
          setDayData({...day});
        }}
      />
      {isDaySelected && (
        <View style={styles.card}>
          <Text>{dayData?.dateString}</Text>
          <Text>Acetaminofen</Text>
          <Button
            title="✔"
            onPress={() => {
              handleCheck();
              navigation.navigate('StatusControlScreen');
            }}
            color={'#00A897'}
          />
        </View>
      )}
    </View>
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
  card: {
    marginTop: 20,
    shadowRadius: 200,
    fontWeight: '900',
    fontSize: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
