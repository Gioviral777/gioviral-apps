import { View, StyleSheet, Image} from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { colors } from "../global/colors";

function Home({setCategorySelected}){
    return(
        <View style={styles.conteiner}>
            <Header title="Inicio"></Header>
            <Categories setCategorySelected={setCategorySelected}></Categories>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: colors.gray_100,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
});