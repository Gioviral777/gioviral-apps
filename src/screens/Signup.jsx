import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import { colors } from "../global/colors";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  //console.log(result)

  const onSubmit = () => {
    console.log("mail", errorMail);
    console.log("password", errorPassword);
    console.log("confirmPassword", errorConfirmPassword);

    try {
      //limpiamos los errores cada vez que ejecutamos el Register
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      signupSchema.validateSync({ password, confirmPassword, email });
      triggerSignup({ email, password });
      console.log("Registro exitoso");
    } catch (err) {
      console.log("path", err.path);
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result));
    }
  }, [result]);

  return (
    <View style={styles.main}>
            <Text style={styles.title}>Register</Text>
            <InputForm 
                label={"Email"} 
                error={errorMail} 
                onChange={setEmail} 
            />
            <InputForm
                label={"Password"}
                error={errorPassword}
                onChange={setPassword}
                isSecure={true}
            />
            <InputForm
                label={"Confirm password"}
                error={errorConfirmPassword}
                onChange={setConfirmPassword}
                isSecure={true}
            />
            <SubmitButton 
                onPress = {onSubmit}
                title = "Send"
            />
            <Text style={styles.subTitle}>Already have an account?</Text>
            <Pressable onPress={()=> NavigationPreloadManager.navigate('Login')}>
                <Text style={styles.subLink}>Login</Text>
            </Pressable>
            <SubmitButton title={"Register"} onPress={onSubmit} />
        </View>
  );
};

export default Signup;

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