import { FlatList, View, StyleSheet } from "react-native";
import categories from '../data/categories.json';
import CategoryItem from "./CategoryItem";
import { colors } from "../global/colors";

function Categories({setCategorySelected}){
    return(
        <View style={styles.conteiner}>
            <FlatList
                data={categories}
                renderItem={({item}) => (
                    <CategoryItem setCategorySelected={setCategorySelected} category={item}></CategoryItem>
                    )}
                    keyExtractor={(category) => category}>
            </FlatList>
        </View>
    );
}

export default Categories;

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: colors.black_100,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});