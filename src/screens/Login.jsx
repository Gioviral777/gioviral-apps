import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import InputForm from "../components/InputForm";
import { colors } from "../global/colors";
import SubmitButton from "../components/SubmitButton";

const Login = () => {
  const onChange = () => {};

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <InputForm 
                label={"Email"} 
                error={""} 
                onChange={onChange} 
            />
            <InputForm 
                label={"Password"} 
                error={""} 
                onChange={onChange} 
            />
            <SubmitButton 
                onPress = {onSubmit}
                title = "Send"
            />
            <Text style={styles.subTitle}>Not have an account?</Text>
            <Pressable onPress={()=> NavigationPreloadManager.navigate('Signup')}>
                <Text style={styles.subLink}>Sign up</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: "90%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray_100,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "ChivoBold",
    },
    subTitle: {
        fontSize: 15,
        fontFamily: "ChivoRegular",
        color: "black",
    },
    subLink: {
        fontSize: 15,
        fontFamily: "ChivoRegular",
        color: "black",
    }
});