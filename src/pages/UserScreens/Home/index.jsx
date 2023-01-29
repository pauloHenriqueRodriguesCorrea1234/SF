import { FlatList, Touchable, TouchableOpacity } from "react-native";
import CardFrutas from "../../../Components/CardFrutas";
import { Conteiner, TextInput } from "../../../Components/Styles/styles"
import { TextPoduct } from './style'
import { useState } from "react";

const Home = () => {
    const [feed, setFeed] = useState([
    {
        id: '1',name:'nanana' 
    }
    ])
    return(
        <Conteiner>
           
           <TextPoduct>PRODUCTS</TextPoduct>

           <TextInput placeholder='write the product name' placeholderTextColor="#000" />

           <TouchableOpacity>
           <FlatList
           data={feed}
           renderItem={({item}) => <CardFrutas/>}
           />
           </TouchableOpacity>


        </Conteiner>
    )
}

export default Home;