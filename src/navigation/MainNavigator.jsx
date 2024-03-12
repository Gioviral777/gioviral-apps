import { StyleSheet, Platform, View } from "react-native";
import React, { useEffect, useState } from "react";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { StatusBar } from 'react-native';
import { useGetProfileImageQuery, useGetUserLocationQuery } from "../services/shopService";
import { setProfileImage, setUserLocation } from "../features/auth/authSlice";

const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.authReducer.value)
  const {data, error, isLoading} = useGetProfileImageQuery(localId);
  const {data: location } = useGetUserLocationQuery(localId);

  const dispatch = useDispatch();

  useEffect(()=> {
    if(data) {
      console.log(data.image);
      dispatch(setProfileImage(data.image))
    }
    if(location) {
      dispatch(setUserLocation(location))
    }
  }, [data, location])

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