import { FlatList, StyleSheet, View } from "react-native";
import { ProductItem } from "../../components/product-item";
import { getAllProducts } from "../../services/products";

export default function Screen() {
  const products = getAllProducts();
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
});
