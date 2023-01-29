import { Image, ViewLogo } from "./style"

const Logo = () => {
    return (
        <ViewLogo>
            <Image source={require('../../assets/img/logo.png')} />
        </ViewLogo>
    )
}

export default Logo