import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { colors } from '../global/colors';

const Cart = ()=> {
  /* const[cartItems, setCartItems] = useState([]);
  const[total, setTotal] = useState(0); */

  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation();

  const confirmCart = ()=> {
    triggerPost({total, cartItems, user: "loggedUser"})
  }
  /* useEffect(()=> {
    const total = allCartItems.reduce((acum, currentItem)=> acum += (currentItem.quantity * currentItem.price), 0)
    setTotal(total);
    setCartItems(allCartItems);
  }, []); */

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            style={styles.list}
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(cartItem) => cartItem.id}
          />
          <Text style={styles.confirmText}>Total: ${total}</Text>
          <Pressable onPress={confirmCart}>
            <Text style={styles.confirmText}>Confirm</Text>
          </Pressable>
        </>
      ) : (
        <Text style={styles.confirmText}>No hay productos agregados</Text>
      )}
    </View>
  );
};

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 130,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.black_100,
  },
  list: {
    width: "100%",
  },
  confirmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: 15,
    width: '100%',
  },
  confirmText: {
    fontFamily: 'ChivoBold',
    fontSize: 18,
    color: 'white',
  },
})