import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header({title}){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    conteiner: {
        height: 50,
        width: '100%',
        backgroundColor: colors.gray_100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});