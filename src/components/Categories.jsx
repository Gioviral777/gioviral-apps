import { FlatList, View, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";
import { colors } from "../global/colors";
import Counter from "./Counter";
import { useSelector } from "react-redux";

function Categories({navigation}){
    const categories = useSelector((state) => state.shopReducer.value.categories);

    return(
        <View style={styles.conteiner}>
            <Counter></Counter>
            <FlatList
                data={categories}
                renderItem={({item}) => (
                    <CategoryItem navigation={navigation} category={item}></CategoryItem>
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