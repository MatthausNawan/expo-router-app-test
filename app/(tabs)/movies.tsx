import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MovieItem } from "../../components/movie-item";
import { getMoviesList } from "../../services/movies";
import { Movie } from "../../types/movie";

export default function Screen() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    setLoading(true);
    const movieList = await getMoviesList();
    setLoading(false);
    setMovies(movieList);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {loading && <Text>Carregando...</Text>}
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h1: {
    fontSize: 30,
    margin: 20,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
});
