import { Pressable, StyleSheet, Text, Image } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";

const CategoryItem = ({category, setCategorySelected}) => {
    return (
        <Card style={{ marginVertical: 20 }}>
            <Pressable onPress={() => setCategorySelected(category)}>
                <Text style={styles.text}>{category}</Text>
            </Pressable>
        </Card>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
    text: {
        flex: 1,
        backgroundColor: colors.chartreuse_100,
        fontSize: 20,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    card: {
        marginVertical: 10,
    }
});