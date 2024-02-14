import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header({title}){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: colors.gray_100,
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    text: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});