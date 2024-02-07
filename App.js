import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Linking, 
  TouchableOpacity, 
  TextInput, 
  Pressable, 
  FlatList, 
  Modal} from 'react-native';
import apCod from './assets/astro.jpeg';
import Icon from "react-native-vector-icons/FontAwesome";
import RemoveModal from './scr/components/RemoveModal';

const DATA = [
  {
    name: "Estrategias",
    id: 1,
  },
  {
    name: "Inbound Marketing",
    id: 2,
  },
  {
    name: "Marketing de contenidos",
    id: 3,
  },
  {
    name: "Landing page",
    id: 4,
  },
  {
    name: "Web profesional",
    id: 5,
  },
  {
    name: "Tienda Online",
    id: 6,
  },
  {
    name: "Web a medida",
    id: 7,
  },
  {
    name: "Android/iOS",
    id: 8,
  },
  {
    name: "Personales",
    id: 9,
  },
  {
    name: "Empresariales",
    id: 10,
  },
  {
    name: "Mentorias",
    id: 11,
  },
  {
    name: "Consultorías",
    id: 12,
  },
  {
    name: "Infoproductos",
    id: 13,
  },
];

export default function App() {
  //useState y useEffect hooks para controlar el estado de la aplicación, y el ciclo de vida de un componente
  /* const [counter, setCounter] = useState(0); */
  const [inputValue, setInputValue] = useState('');//conponente controlado
  const [cartItems, setCartItems] = useState(DATA);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  /* const handleAddCounter = () => setCounter(counter + 1); */

  const handleInputChange = (value)=> setInputValue(value);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
    /* console.log(id); */
  };

  //console.log('Hubo un error en el servidor (se rompió todo)');

  const handlePress = () => 
    Linking.openURL(
      "https://github.com/Gioviral777/gioviral-apps/blob/main/App.js"
    );

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    }
    setCartItems([...cartItems, newItem]);
  };

  return (
    //conteiner
    <View style={styles.container}>
      {/* El StatusBar controla la barra de estado del dispositivo */}
      <StatusBar style="auto"/>
      <View style={styles.header}>
        <Text>¡BIENVENIDOS AL FUTURO!</Text>
        <Text>¡AGENCIA GIOVIRAL!</Text>
        <Text></Text>
        <View>
          <Image style = {styles.imageLogo} source = {apCod} />
        </View>
        <Text></Text>
      </View>

      {/* Llamamos al modal para eliminar el producto y le pasamos por props toda la data que necesita */}
      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />

      <View style = {{flexDirection: 'row'}}>
        <TextInput 
          onChangeText={handleInputChange} 
          value = {inputValue} 
          style = {styles.textinp} 
          placeholder = 'Ingrese un servicio'>
        </TextInput>
        <Pressable onPress={addItem}>
          <Text style = {{fontSize: 40}}>+</Text>
        </Pressable>
      </View>

      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Icon name = "github" size={30} color="white" />
        <Text style = {{ color: "white", fontSize: 20, marginLeft: 10 }}>
          Nuestros Servicios
        </Text>
      </TouchableOpacity>

      <View style={styles.productList}>
        {/* {DATA.map((item)=> (
          <View key={item.id}>
            <Text style={styles.productList}>{item.name}</Text>
          </View>
        ))} */}
        {
        <FlatList 
          data = {cartItems}
          renderItem = {({ item })=> (
            <View style={{width: 400, flexDirection: 'row'}}>
              <Text style = {styles.product}>{item.name}</Text>
              <Pressable onPress={()=> handleModal(item.id)}>
                <Text style={{ fontSize: 20 }}>🚮</Text>
              </Pressable>
            </View>
          )}
          keyExtractor = {item => item.id}
        />}
      </View>
    </View>
  );
}

//flexDirection, lo usamos para acomodar el contenido a un costado, y gap, para hacer la separación entre dos cosas (imagen y texto por ejemplo)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight + 208,
  },
  imageLogo:{
    width: 100,
    height: 100,
  },
  header: {
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },
  button: {
    margin: 50,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",//row, para poner en fila, al costado
    alignItems: "center",
  },
  textinp:{
    borderColor: 'blue', 
    borderWidth: 1, 
    paddingHorizontal: 10, 
    paddingVertical: 1, 
    borderRadius: 5, 
    width: '60%',
    gap: 8,
  },
  productList: {
    fontSize: 15, 
    fontWeight: "bold", 
    paddingVertical: 10,
    alignItems: 'center',
  },
  product: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
  },
});