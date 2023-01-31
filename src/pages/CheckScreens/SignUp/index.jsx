//Logo
import Logo from "../../../Components/Logo";

//States
import { useState } from "react";

//Styles
import { Conteiner, TextBlack, TextInput, TextWhite, TouchableOpacityBackGraudWhite, TouchableOpacityWithoutStyling } from "../../../Components/Styles/styles";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {

    const navigation = useNavigation();

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
                value={name}
                onChangeText={(text) => setName(text)}
            ></TextInput>
            <TextInput
                placeholderTextColor="#FFF"
                placeholder="Informe seu E-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
            ></TextInput>
            <TextInput
                placeholderTextColor="#FFF"
                secureTextEntry={true}
                placeholder="Escolha uma senha"
                value={passWord}
                onChangeText={(text) => setPassWors(text)}
            ></TextInput>
            <TextInput
                placeholderTextColor="#FFF"
                secureTextEntry={true}
                placeholder="Confirme sua senha"
                value={checkPassWord}
                onChangeText={(text) => setCheckPassWors(text)}
            ></TextInput>

            <TouchableOpacityBackGraudWhite onPress={() => navigation.navigate("Login")}>
                <TextBlack>SIGN UP</TextBlack>
            </TouchableOpacityBackGraudWhite>

        </Conteiner>
    )
}