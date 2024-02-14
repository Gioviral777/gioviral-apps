import { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Pressable, Text } from "react-native";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import Header from "../components/Header";

function ItemListCategories ({category, setCategorySelected}){
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        if (category) {
          const products = allProducts.filter((product) => product.category === category);
          const filteredProducts = products.filter((product) =>
            product.title.includes(keyword)
          );
          setProducts(filteredProducts);
        } else {
          const filteredProducts = allProducts.filter((product) =>
            product.title.includes(keyword)
          );
          setProducts(filteredProducts);
        }
      }, [category, keyword]);

    return (
        <View style={styles.container}>
            <Header title={category}></Header>
            <Pressable onPress={()=> setCategorySelected('')}>
              <Text>INICIO</Text>
            </Pressable>
            <Search keyword={keyword} onSearch={setKeyword}></Search>
            <FlatList
            data={products}
            renderItem={({item})=> <ProductItem product={item}></ProductItem>}
            keyExtractor={(item)=> item.id}>
            </FlatList>
        </View>
    );
}

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: 'ChivoBold',
    },
  });