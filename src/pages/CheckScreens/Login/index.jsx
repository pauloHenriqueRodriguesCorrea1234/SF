import Logo from "../../../Components/Logo";
import { useState } from "react";
import { TextBlack, TextInput, TextWhite, TouchableOpacityBackGraudWhite, TouchableOpacityWithoutStyling, Conteiner } from "../../../Components/Styles/styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

    const navigation = useNavigation()
    const [name, setName] = useState([]);
    const [passWord, setPassWors] = useState([]);

    return (
        <Conteiner>
            <Logo />

            <TextInput
                placeholderTextColor="#FFF"
                placeholder={"Informe seu E-mail"}
            />
            <TextInput placeholderTextColor="#FFF"
                secureTextEntry={true}
                placeholder={"Informe sua senha"}
            />

            <TouchableOpacityBackGraudWhite onPress={() => navigation.navigate("Home")}>
                <TextBlack>LOGIN</TextBlack>
            </TouchableOpacityBackGraudWhite>

            <TouchableOpacityWithoutStyling onPress={() => navigation.navigate("Screen1")}>
                <TextWhite>Forgot your passWord?</TextWhite>
            </TouchableOpacityWithoutStyling>

            <TouchableOpacityWithoutStyling onPress={() => navigation.navigate("SignUp")}>
                <TextWhite>SIGN UP</TextWhite>
            </TouchableOpacityWithoutStyling>

        </Conteiner>
    )
}

export default Login;