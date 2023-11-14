import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;
const SimpleModal = (props) => {
    closeModal = (bool, data) =>{
        props.changeModalVisible(bool);
        props.setData(data);
    }
    return (
        <TouchableOpacity
            disabled={true}
            style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={[styles.text, {fontSize: 20}]}>Recordatorio</Text>
                    <Text style={styles.text}>Acetaminofén</Text>
                </View>
                <View style={styles.buttonsViews}>
                    <TouchableOpacity 
                    onPress={() => closeModal(false, 'Aceptar')}
                    style={[styles.touchableOpacity, {backgroundColor: '#00A897'}]}>
                        <Text style={styles.text}>Aceptar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => closeModal(false, 'Cancel')}
                    style={[styles.touchableOpacity, {backgroundColor: 'white'}]}>
                        <Text style={styles.text}>Posponer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        height: HEIGHT_MODAL,
        width: WIDTH - 80,
        paddingTop: 10,
        backgroundColor: '#91D4CF',
        borderRadius: 10
    },
    textView: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        color: 'black',
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonsViews: {
        width: '100%',
        flexDirection: 'row'
    },
    touchableOpacity: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 5,
    }
});

export { SimpleModal }