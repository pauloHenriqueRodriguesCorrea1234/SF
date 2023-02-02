import { Conteiner, Icon, TouchableOpacity } from "./style"
export const TabIcons = () => {
    return (
        <Conteiner>

            <TouchableOpacity>
                <Icon source={require("../../assets/img/logo.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon source={require("../../assets/img/logo.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon source={require("../../assets/img/logo.png")} />
            </TouchableOpacity>

        </Conteiner>
    )
}