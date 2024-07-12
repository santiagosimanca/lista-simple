import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import * as Linking from 'expo-linking';

Linking.openURL('https://expo.dev');

export default function App() {
const [textItem, setTextItem] = useState("");
const [items, setItems] = useState([]);
const [selectedItem, setSelectedItem] = useState({});
const [modalVisible, setModalVisible] = useState(false);

const onHandleTextChange = (text) => {
    setTextItem(text);
};

const onHandleAdd = () => {
    setItems((prevState) => [...prevState, { id: Date.now().toString(), value: textItem }]);
    setTextItem("");
};

const onHandleModal = (item) => {
    setSelectedItem(item);
    setModalVisible(!modalVisible);
};

const deleteItem = () => {
    setItems((prevState) => prevState.filter((item) => item.id !== selectedItem.id));
    setModalVisible(false);
};

const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
    <Text>{item.value}</Text>
    <TouchableOpacity onPress={() => onHandleModal(item)}>
        <Text>x</Text>
    </TouchableOpacity>
    </View>
);

return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
        <TextInput
        value={textItem}
        placeholder='Elemento a agregar'
        onChangeText={onHandleTextChange}
        style={styles.textInput}
        />
        <Button title="Agregar" onPress={onHandleAdd} />
    </View>
    <View style={styles.listContainer}>
        <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    </View>
    <Modal visible={modalVisible} animationType='fade' style={styles.modal}>
        <Text>¿Estás seguro de eliminar este elemento?</Text>
        <Button title="Sí, borrar" color="#db5a42" onPress={deleteItem} />
        <Button title="Cancelar" onPress={onHandleModal} />
    </Modal>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100,
},
inputContainer: {
    flexDirection: 'row',
},
textInput: {
    paddingHorizontal: 20,
},
itemContainer: {
    flexDirection: 'row',
},
listContainer: {
    flex: 1,
    width: '100%',
},
modal: {
    justifyContent: 'center',
    alignItems: 'center',
},
});
