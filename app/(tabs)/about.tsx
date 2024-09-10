import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/button";
import { AuthContext } from "../../contexts/auth";

export default function Screen() {
  const auth = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Sobre o meu catálogo</Text>
      <Text>User: {auth?.data.user?.name}</Text>
      <Text>Email: {auth?.data.user?.email}</Text>

      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <Button
          title="Mudar para Pedro"
          onPress={() =>
            auth?.dispatch({
              type: "SET_USER",
              payload: {
                name: "Pedro Gael",
                email: "pg@email.com",
              },
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
