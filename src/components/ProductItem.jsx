import { StyleSheet, Text } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";

const ProductItem = ({product}) => {
    return (
        <Card style={styles.card}>
            <Text style={styles.text}>{product.title}</Text>
        </Card>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    text: {
        flex: 1,
        backgroundColor: colors.chartreuse_100,
        fontSize: 20,
        color: 'black',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    card: {
        marginVertical: 10,
    }
});