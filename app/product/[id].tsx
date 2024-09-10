import { router, Stack, useLocalSearchParams } from "expo-router";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "../../components/button";
import { getCategoryById } from "../../services/category";
import { getProductById } from "../../services/products";

export default function Screen() {
  const { id } = useLocalSearchParams();
  const productId = parseInt(id as string);
  const product = getProductById(productId);

  if (!product) return router.back;

  const category = getCategoryById(product?.idCategory!);

  const handleAddToCard = () => {
    Alert.alert("Item Adicionado no Carrinho!");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: product?.title }} />
      <ScrollView style={styles.area}>
        <Image
          source={{ uri: product?.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.category}>{category?.title}</Text>
        <Text style={styles.description}>{product?.description}</Text>
        <View style={styles.priceBox}>
          <Text style={styles.price}>R$ {product?.price.toFixed(2)}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <Button title={`Comprar`} onPress={handleAddToCard} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  image: {
    width: "100%",
    height: 300,
    backgroundColor: "#555",
    borderRadius: 10,
  },
  area: {
    flex: 1,
  },
  buttonArea: {},
  title: {
    fontSize: 22,
    marginVertical: 5,
  },
  category: {
    fontSize: 16,
    color: "#660066",
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  priceBox: {
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  price: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
