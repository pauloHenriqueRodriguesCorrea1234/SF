import { FlatList, Touchable, TouchableOpacity } from "react-native";
import CardFrutas from "../../../Components/CardFrutas";
import { Conteiner, TextInput } from "../../../Components/Styles/styles"
import { TextPoduct } from './style'
import { useState } from "react";

const Home = () => {
    const [product, setProduct] = useState([
        {
            "product": [
                {
                    "id": 1,
                    "name": "Banana",
                    "url": ""
                },
                {
                    "id": 2,
                    "name": "Maça",
                    "url": ""
                },
                {
                    "id": 3,
                    "name": "Maça",
                    "url": ""
                },
                {
                    "id": 4,
                    "name": "Maça",
                    "url": ""
                },
                {
                    "id": 5,
                    "name": "Maça",
                    "url": ""
                },
                {
                    "id": 6,
                    "name": "Maça",
                    "url": ""
                },
                {
                    "id": 7,
                    "name": "Maça",
                    "url": ""
                },
                {
                    "id": 8,
                    "name": "Maça",
                    "url": ""
                }
            ]
        }
    ])
    return (
        <Conteiner>

            <TextPoduct>PRODUCTS</TextPoduct>

            <TextInput placeholder='write the product name' placeholderTextColor="#000" />

            {product&& <TouchableOpacity>
                <FlatList
                    data={product}
                    renderItem={({ item }) => <CardFrutas productName={item.name}/>}
                />
            </TouchableOpacity>}


        </Conteiner>
    )
}

export default Home;