//Logo
import Logo from "../../../Components/Logo";

//States
import { useState } from "react";

//Styles
import { Conteiner, TextBlack, TextInput, TextWhite, TouchableOpacityBackGraudWhite, TouchableOpacityWithoutStyling } from "../../../Components/Styles/styles";

export default function SignUp({ navigation }) {

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [passWord, setPassWors] = useState([]);
    const [checkPassWord, setCheckPassWors] = useState([]);

    return (
        <Conteiner>
            <Logo />
            <TextInput
                placeholderTextColor="#FFF"
                placeholder="Informe seu nome"
            ></TextInput>
            <TextInput
                placeholderTextColor="#FFF"
                placeholder="Informe seu E-mail"
            ></TextInput>
            <TextInput
                placeholderTextColor="#FFF"
                secureTextEntry={true}
                placeholder="Escolha uma senha"
            ></TextInput>
            <TextInput
                placeholderTextColor="#FFF"
                secureTextEntry={true}
                placeholder="Confirme sua senha"
            ></TextInput>

            <TouchableOpacityBackGraudWhite onPress={() => navigation.push("Home")}>
                <TextBlack>SIGN UP</TextBlack>
            </TouchableOpacityBackGraudWhite>

            <TouchableOpacityWithoutStyling onPress={() => navigation.push("Login")}>
                <TextWhite>BACK</TextWhite>
            </TouchableOpacityWithoutStyling>
        </Conteiner>
    )
}