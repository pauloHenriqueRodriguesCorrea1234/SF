// States
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

//Components
import Logo from "../../../../Components/Logo"

//Styles
import { Bar, TextBlack, TextInput, TextTitlePassWord, TextWhite, TouchableOpacityBackGraudWhite, TouchableOpacityWithoutStyling, TextInfoForgots, Conteiner } from "../../../../Components/Styles/styles"

const Screen1 = () => {

    const [emailReset, setEmailReset] = useState([])
    const navigation = useNavigation()

    return (
        <Conteiner>

            <Logo />
            <TextTitlePassWord>Reset Password</TextTitlePassWord>
            <Bar />

            <TextInfoForgots>Enter the e-mail associed with your account and we’ll send an e-mail with  instructions to reset your password.</TextInfoForgots>
            <TextInput value={emailReset} onChangeText={setEmailReset} placeholderTextColor="#FFF" placeholder="E-Mail Addres" />

            <TouchableOpacityBackGraudWhite onPress={() => navigation.navigate('Screen2')}>
                <TextBlack>Avançar</TextBlack>
            </TouchableOpacityBackGraudWhite>

            <TouchableOpacityWithoutStyling onPress={() =>  navigation.goBack()}>
                <TextWhite>Back</TextWhite>
            </TouchableOpacityWithoutStyling>

        </Conteiner>
    )
}

export default Screen1;