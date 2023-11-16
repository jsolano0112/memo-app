// Sidebar.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Sidebar = ({ isOpen, toggleSidebar, selectedItem, onSelectItem }) => {
    const navigation = useNavigation();

    const handleItemPress = (item) => {
        onSelectItem(item);
        navigation.navigate(item);
        toggleSidebar(); 
    };
    return (
        <View style={{ flexDirection: 'column', position: 'absolute', left: isOpen ? 0 : -200, width: 200, height: '100%', backgroundColor: '#f0f0f0', padding: 20, zIndex:99 }}>
            <TouchableOpacity onPress={toggleSidebar}>
                <Text style={{ fontSize: 20, marginBottom: 20, color: 'blue' }}>
                    ☰
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleItemPress('Home')}>
                <Text style={{ fontSize: 20, marginBottom: 20, color: selectedItem === 'Home' ? 'blue' : 'black' }}>
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleItemPress('RegisterMedicationScreen')}>
                <Text style={{ fontSize: 20, marginBottom: 20, color: selectedItem === 'Home' ? 'blue' : 'black' }}>
                    Registrar medicamento
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleItemPress('Calendar')}>
                <Text style={{ fontSize: 20, marginBottom: 20, color: selectedItem === 'Home' ? 'blue' : 'black' }}>
                    Calendario
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleItemPress('VinculateFriend')}>
                <Text style={{ fontSize: 20, marginBottom: 20, color: selectedItem === 'Home' ? 'blue' : 'black' }}>
                    Vincular Compañero
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleItemPress('StatusControlScreen')}>
                <Text style={{ fontSize: 20, marginBottom: 20, color: selectedItem === 'Home' ? 'blue' : 'black' }}>
                    Estado de ánimo
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleItemPress('VinculateFriend')}>
                <Text style={{ fontSize: 20, marginBottom: 20, color: selectedItem === 'Profile' ? 'blue' : 'black' }}>
                    Estadísticas
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Sidebar;
