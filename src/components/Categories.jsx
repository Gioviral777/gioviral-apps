import { FlatList, View, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";
import { colors } from "../global/colors";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/shopService";

function Categories({navigation}){
    /* const categories = useSelector((state) => state.shopReducer.value.categories); */

    const { data, isLoading, error } = useGetCategoriesQuery();

    return(
        <View style={styles.conteiner}>
            <Counter></Counter>
            <FlatList
                data={data}
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