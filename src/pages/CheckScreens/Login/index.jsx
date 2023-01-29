import Logo from "../../../Components/Logo";
import { useState } from "react";
import { TextBlack, TextInput, TextWhite, TouchableOpacityBackGraudWhite, TouchableOpacityWithoutStyling, Conteiner } from "../../../Components/Styles/styles";

const Login = ({ navigation }) => {

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

            <TouchableOpacityBackGraudWhite onPress={() => navigation.push("Home")}>
                <TextBlack>LOGIN</TextBlack>
            </TouchableOpacityBackGraudWhite>

            <TouchableOpacityWithoutStyling onPress={() => navigation.push("Screen1")}>
                <TextWhite>Forgot your passWord?</TextWhite>
            </TouchableOpacityWithoutStyling>

            <TouchableOpacityWithoutStyling onPress={() => navigation.push("SignUp")}>
                <TextWhite>SIGN UP</TextWhite>
            </TouchableOpacityWithoutStyling>

        </Conteiner>
    )
}

export default Login;