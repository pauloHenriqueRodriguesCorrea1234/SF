import { Conteiner, StatusBar } from "./AppStyle";
import Routes from "./src/Routes";

const App = () => {
    return(
        <Conteiner>
            <StatusBar barStyle="light-content"/>
            <Routes/>
        </Conteiner>
    )
}

export default App;