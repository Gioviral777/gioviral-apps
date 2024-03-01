import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from "../global/colors";

const CartItem = ({item})=> {
  return (
    <View style={styles.cardItem} onPress={()=> {}}>
        <View style={styles.textContainer}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.textbrand}>{item.brand}</Text>
            <Text style={styles.textPrice}>$ {item.price}</Text>
      </View>
    </View>
  );
};

export default CartItem

const styles = StyleSheet.create({
    cardItem: {
        flex: 1,
        height: 100,
        backgroundColor: colors.gray_100,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        width: "70%",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    textTitle: {
        fontFamily: 'ChivoBold',
        fontSize: 19,
        color: colors.white_100,
    },
    textbrand: {
        fontFamily: 'ChivoRegular',
        fontSize: 14,
        color: colors.black_100,
    },
    textPrice: {
        fontFamily: 'ChivoRegular',
        fontSize: 14,
        color: colors.chartreuse_100,
    },
});