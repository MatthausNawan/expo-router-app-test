import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Category } from "../types/category";

type Props = {
  data: Category;
};
export const CategoryItem = ({ data }: Props) => {
  const handleClick = () => {
    router.push(`/categories/${data.id}`);
  };

  return (
    <Pressable onPress={handleClick} style={styles.container}>
      <Image
        source={{ uri: data.cover }}
        resizeMode="cover"
        style={styles.cover}
      />
      <View style={styles.bg}></View>
      <View style={styles.box}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  cover: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  bg: {
    height: 150,
    backgroundColor: "#000",
    borderRadius: 10,
    opacity: 0.5,
    marginTop: -150,
  },
  box: {
    height: 150,
    marginTop: -150,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#ebebeb",
    letterSpacing: 2.5,
  },
});
