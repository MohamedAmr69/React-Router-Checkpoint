import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    // Container to hold the list of movies
    <Container>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Link
              to={`/movie/${movie.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MovieCard movie={movie} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
