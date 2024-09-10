import { FlatList, StyleSheet, View } from "react-native";
import { CategoryItem } from "../../../components/category-item";
import { getAllCategories } from "../../../services/category";

export default function Screen() {
  const categories = getAllCategories();
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem data={item} />}
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
