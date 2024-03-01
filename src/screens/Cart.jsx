import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import allCartItems from '../data/cart.json';
import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import React from 'react';
import { colors } from '../global/colors';

const Cart = ()=> {
  const[cartItems, setCartItems] = useState([]);
  const[total, setTotal] = useState(0);

  useEffect(()=> {
    const total = allCartItems.reduce((acum, currentItem)=> acum += (currentItem.quantity * currentItem.price), 0)
    setTotal(total);
    setCartItems(allCartItems);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.list}
        data={cartItems}
        renderItem={({item})=> <CartItem item={item}></CartItem>}
        keyExtractor={(cartItems) => cartItems.id}>
      </FlatList>
      <View style={styles.confirmContainer}>
        <Pressable>
          <Text style={styles.confirmText}>
            Confirm
          </Text>
        </Pressable>
        <Text style={styles.confirmText}>Total: ${total}</Text>
      </View>
    </View>
  )
}

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