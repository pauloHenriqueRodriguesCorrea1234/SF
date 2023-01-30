import { TextInput } from "../Styles/styles";
import { Image, Text, View } from "./style";

export default function CardFrutas(props ) {
  return (
    <View>
      <Image/>
      <Text>{props.data.name}</Text>
    </View>
  );
}
