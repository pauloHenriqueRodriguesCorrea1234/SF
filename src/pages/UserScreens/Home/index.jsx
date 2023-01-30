import { FlatList, TouchableOpacity } from "react-native";
import CardFrutas from "../../../Components/CardFrutas";
import { Conteiner, TextInput } from "../../../Components/Styles/styles"
import { TextPoduct } from './style'
import { useEffect, useState } from "react";

const Home = () => {
    const [product, setProduct] = useState([
        {
            "id": 1,
            "name": "Banana",
        },
        {
            "id": 2,
            "name": "Maça",
        },
        {
            "id": 3,
            "name": "Maça1",
        },
        {
            "id": 4,
            "name": "Maça2",
        },
        {
            "id": 5,
            "name": "Maça3",
        },
        {
            "id": 6,
            "name": "Maça4",
        },
        {
            "id": 7,
            "name": "Maça5",
        },
        {
            "id": 8,
            "name": "Maça6",
        }
    ]);

    useEffect(() => {

    }, [product])
    return (
        <Conteiner>

            <TextPoduct>PRODUCTS</TextPoduct>

            <TextInput placeholder='write the product name' placeholderTextColor="#000" />

            {product &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={product}
                    renderItem={({ item }) =>
                        <TouchableOpacity>
                            <CardFrutas data={item} />
                        </TouchableOpacity>}
                />
            }

        </Conteiner>
    )
}

export default Home;