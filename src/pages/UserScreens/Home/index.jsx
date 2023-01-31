import { FlatList, TouchableOpacity } from "react-native";
import { TextInput } from "../../../Components/Styles/styles"
import { TextPoduct, Conteiner } from './style'
import { product } from '../../../../data/product.json'
import CardFrutas from "../../../Components/CardFrutas";

const Home = () => {
    return (
        <Conteiner>

            <TextPoduct>PRODUCTS</TextPoduct>

            <TextInput placeholder='write the product name' placeholderTextColor="#000" />

            <FlatList
                data={product}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <CardFrutas
                            key={item}
                            productName={item.name}
                        />
                    </TouchableOpacity>

                )}
            />

        </Conteiner>
    )
}

export default Home;