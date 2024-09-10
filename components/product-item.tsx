import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../types/product";

type Props = {
  data: Product;
};

export const ProductItem = ({ data }: Props) => {
  return (
    <Link href={`/product/${data.id}`} asChild>
      <Pressable style={style.container}>
        <Image
          style={style.image}
          source={{ uri: data.image }}
          resizeMode="cover"
        />
        <View style={style.info}>
          <Text style={style.title}>{data.title}</Text>
          <Text style={style.description}>{data.description}</Text>
          <Text style={style.price}>R$ {data.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginRight: 20,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "#660066",
    fontWeight: "bold",
    textAlign: "right",
  },
});
