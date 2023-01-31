import Logo from "../../../Components/Logo";
import { useEffect, useState } from "react";

import { TextBlack, TextInput, TextWhite, TouchableOpacityBackGraudWhite, TouchableOpacityWithoutStyling } from "../../../Components/Styles/styles";
import { useNavigation } from "@react-navigation/native";
import app from "../../../config/firebase";
import { KeyboardAvoidingView, ViewError, TextError } from "./style"
import { Platform, View } from "react-native";

const Login = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [passWord, setPassWors] = useState('');
    const [errorLogin, setErrorLogin] = useState('');

    const loginFireBase = () => {


    }

    useEffect(() => {

    }, []);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding' : 'height'}>

            <Logo />

            <TextInput
                placeholderTextColor="#FFF"
                placeholder="Informe seu E-mail"
                type='text'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput placeholderTextColor="#FFF"
                secureTextEntry={true}
                placeholder={"Informe sua senha"}
                value={passWord}
                onChangeText={(text) => setPassWors(text)}
            />


            {/* Se errorLogin for verdadeiro entra nesta condição,
            se o email ou senha não existir exibe uma mensagem,
            se não não exibe nada.
            */}
            {errorLogin === true
                ?
                <ViewError>
                    <TextError>Ivalid e-mail or password</TextError>
                </ViewError>
                :
                <View />
            }

            {/* Verifica se o campo de email e senha foi preenchido se não estiver 
            o botão de login é desabilitado
            */}
            {email === "" || passWord === ""
                ?
                <TouchableOpacityBackGraudWhite disabled={true}>
                    <TextBlack>LOGIN</TextBlack>
                </TouchableOpacityBackGraudWhite>
                :
                <TouchableOpacityBackGraudWhite onPress={() => navigation.navigate("Home")}>
                    <TextBlack>LOGIN</TextBlack>
                </TouchableOpacityBackGraudWhite>
            }

            <TouchableOpacityWithoutStyling onPress={() => navigation.navigate("Screen1")}>
                <TextWhite>Forgot your passWord?</TextWhite>
            </TouchableOpacityWithoutStyling>

            <TouchableOpacityWithoutStyling onPress={() => navigation.navigate("SignUp")}>
                <TextWhite>SIGN UP</TextWhite>
            </TouchableOpacityWithoutStyling>

        </KeyboardAvoidingView>

    )
}

export default Login;