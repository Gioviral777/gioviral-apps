import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity} from 'react-native';
import apCod from './assets/astro.jpeg';
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const handlePress = () =>
    Linking.openURL(
      "https://github.com/Gioviral/Coder_Apps.git"
    );
  return (
    <View style={styles.container}>
      <Text>¡BIENVENIDOS AL FUTURO!</Text>
      <Text></Text>
      <Text>¡AGENCIA GIOVIRAL!</Text>
      <Text></Text>
      <Image style = {{width: 200, height: 200}} source = {apCod} />
      <StatusBar style="auto" />

      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Icon name="github" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
          {" "}
          Nuestros Servicios
        </Text>
      </TouchableOpacity>

    <View>
      <Text style={styles.product}>Growth Marketing</Text>
      <Text style={styles.product}>Desarrollo WEB</Text>
      <Text style={styles.product}>Desarrollo Mobile</Text>
      <Text style={styles.product}>Finanzas</Text>
      <Text style={styles.product}>Liderazgo</Text>
      <Text style={styles.product}>Ventas</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 50,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  product: {
    fontSize: 18, 
    fontWeight: "bold", 
    padding: 4,
    textAlign: 'center',
  },
});