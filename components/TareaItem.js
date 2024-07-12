import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TareaItem(props) {
    return (
        <View style={styles.container}>
            <View style={styles.ixContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.tareaContainer}>
                <Text style={styles.tarea}>{props.tarea}</Text>
                <TouchableOpacity onPress={() => props.borrarTarea()}>
                    <MaterialIcons style={styles.borrar} name="delete" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    ixContainer: {
        backgroundColor: '#3e3364',
        borderRadius: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    tareaContainer: {
        backgroundColor: '#0000FF',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        padding: 10,
    },
    tarea: {
        fontSize: 18,
    },
    borrar: {
        marginLeft: 10,
    },
});
