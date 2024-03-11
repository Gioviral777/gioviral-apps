import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import { colors } from "../global/colors";
import { ActivityIndicator } from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerSignin, result] = useLoginMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    /* console.log("mail", errorMail);
    console.log("password", errorPassword); */

    try {
      //limpiamos los errores cada vez que ejecutamos el Register
      setErrorMail("");
      setErrorPassword("");

      loginSchema.validateSync({ email, password });
      triggerSignin({ email, password });
      console.log("Login exitoso");
    } catch (err) {
      console.log("path", err.path);
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        default:
          break;
      }
      console.log(err.message)
    }
  };

  useEffect(() => {
    console.log(result);
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <InputForm 
                label={"Email"} 
                onChange={setEmail} 
                error={errorMail} 
            />
            <InputForm 
                label={"Password"} 
                error={errorPassword} 
                onChange={setPassword} 
                isSecure={true}
            />
            <SubmitButton 
                onPress = {onSubmit}
                title = "Login"
            />
            <Text style={styles.subTitle}>Not have an account?</Text>
            {result.isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <SubmitButton title={"Register"} onPress={()=> navigation.navigate('Signup')} />
            )}
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
        backgroundColor: colors.black_100,
    },
    container: {
        width: "90%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.chartreuse_100,
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