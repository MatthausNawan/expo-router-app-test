import { router } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { Button } from "../components/button";

export default function Screen() {
  const handleNavigate = () => {
    router.replace("/home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="cover"
      />
      <Text style={styles.h1}>Loja do Matthaus</Text>
      <Text style={styles.h2}>Olhe nosso catálogo</Text>
      <Button title="Acessar Catálogo" onPress={handleNavigate} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  h1: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  h2: {
    fontSize: 16,
    marginBottom: 10,
  },
});
