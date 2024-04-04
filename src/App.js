import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./MovieDetails";

import cover1 from "./images/batman begins.jpg";
import cover2 from "./images/The dark knight.jpeg";
import cover3 from "./images/the dark knight  rises.jpg";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "Batman Begins (2005)",
      description:
        " After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
      posterURL: cover1,
      rating: 8.2,
      trailerLink:
        "https://www.youtube.com/embed/neY2xVmOfUM?si=-pZWnnI9PZPjSNN9",
    },
    {
      id: 1,
      title: "The Dark Knight (2008)",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice",
      posterURL: cover2,
      rating: 9.0,
      trailerLink:
        "https://www.youtube.com/embed/EXeTwQWrcwY?si=93BO1gOmJelpRned",
    },
    {
      id: 2,
      title: "The Dark Knight Rises (2012)",
      description:
        "Eight years after the Joker's reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.",
      posterURL: cover3,
      rating: 8.4,
      trailerLink:
        "https://www.youtube.com/embed/GokKUqLcvD8?si=PjI8g8sXOyGkVKiZ",
    },
  ]);

  const addMovie = (newMovie) => {
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 0;
    setMovies([...movies, { ...newMovie, id: newId }]);
  };

  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<MovieList movies={movies} />} />
              <Route
                path="/movie/:id"
                element={<MovieDetails movies={movies} />}
              />
            </Routes>
            <AddMovieForm onSubmit={addMovie} />
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
