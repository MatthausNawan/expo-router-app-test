import { StyleSheet, Text, View } from "react-native";
import { Movie } from "../types/movie";

type Props = {
  movie: Movie;
};
export const MovieItem = ({ movie }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>{movie.title}</Text>
      <Text style={styles.year}>Ano: {movie.releaseYear}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  h2: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  year: {
    marginVertical: 10,
    textAlign: "center",
  },
});
