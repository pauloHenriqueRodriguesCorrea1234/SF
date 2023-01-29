import { Conteiner, StatusBar } from "./AppStyle";
import Routes from "./src/pages/Routes";


export default function App() {
    return(
        <Conteiner>
            <StatusBar/>
            <Routes/>
        </Conteiner>
    )
}