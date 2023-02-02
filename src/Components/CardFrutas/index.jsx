import { Image, Text, View } from "./style";

export default function CardFrutas({ img, productName }) {
  return (
    <View>
      <Image source={require("../../assets/img/logo.png")}/>
      <Text>{productName}</Text>
    </View>
  );
}
