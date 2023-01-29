import { useNavigation } from "@react-navigation/native"
import Logo from "../../../../Components/Logo"
import { Bar, Conteiner, TextBlack, TextInput, TextInfoForgots, TextTitlePassWord, TextWhite, TouchableOpacityBackGraudWhite, TouchableOpacityWithoutStyling } from "../../../../Components/Styles/styles"


const Screen3 = () => {

    const navigation = useNavigation()
    
    return (
        <Conteiner>
            <Logo />
            <TextTitlePassWord>Reset password</TextTitlePassWord>
            <Bar />

            <TextInfoForgots>Enter the e-mail associed with your account and we’ll send an e-mail with  instructions to reset your password.</TextInfoForgots>

            <TextInput placeholderTextColor="#FFF" placeholder="Enter the new password"/>
            <TextInput placeholderTextColor="#FFF" placeholder="Confurm the new password"/>

            <TouchableOpacityBackGraudWhite onPress={() => navigation.navigate("Login")}>
                <TextBlack>LOGIN</TextBlack>
            </TouchableOpacityBackGraudWhite>

            <TouchableOpacityWithoutStyling onPress={() => navigation.goBack()}>
                <TextWhite>Back</TextWhite>
            </TouchableOpacityWithoutStyling>

        </Conteiner>
    )
}

export default Screen3