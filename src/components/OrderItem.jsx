import { StyleSheet, Text, View} from "react-native";
import React from "react";
import { colors } from "../global/colors";

const OrderItem = ({ item }) => {
  const total = item.items.reduce(
    (acum, currentItem) => (acum += currentItem.quantity * currentItem.price),
    0
  );

  return (
    <View style={styles.card} onPress={()=> {}}>
      <View style={styles.textConteiner}>
        <Text style={styles.textDate}>{new Date(item.createdAt).toLocaleString()}</Text>
        <Text style={styles.textTotal}>$ {total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 100,
    backgroundColor: colors.black_100,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textConteiner: {
    width: "70%",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textDate: {
    fontFamily: 'ChivoRegular',
    fontSize: 18,
    color: 'white',
  },
  textTotal: {
    fontFamily: 'ChivoBold',
    fontSize: 20,
    color: 'white',
  },
});