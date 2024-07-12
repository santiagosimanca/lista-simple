import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TareaInputField(props) {
    const [tarea, setTarea] = useState('');
    const handleAgregarTarea = (value) => {
        props.addTarea(value);
        setTarea('');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TextInput style={styles.inputField} value={tarea} onChangeText={text => setTarea(text)} placeholder={'Agrega una Tarea'} placeholderTextColor={'#fff'} />
            <TouchableOpacity onPress={() => handleAgregarTarea(tarea)} style={styles.boton}>
                <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'white',
        backgroundColor: '#3e3e3e',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 10,
        left: '13%',
    },
    inputField: {
        color: 'white',
        height: 30,
        flex: 1,
        marginLeft: 10,
    },
    boton: {
        height: 20,
        width: 20,
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
