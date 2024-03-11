import { StyleSheet, Platform, View } from "react-native";
import React, { useState } from "react";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { StatusBar } from 'react-native';

const MainNavigator = () => {
  //const [user, setUser] = useState(null);

  const user = useSelector(state => state.authReducer.value.user);

  return (
    <View style={styles.container}>
      <NavigationContainer>
          {user ? <TabNavigator /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});