import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const toggleTrailer = () => {
    setShowTrailer((prevShowTrailer) => !prevShowTrailer);
  };

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Link
        to={`/movie/${movie.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>Rating: {movie.rating}</Card.Text>
        </Card.Body>
      </Link>
      <Button
        variant="primary"
        onClick={toggleTrailer}
        style={{ marginBottom: "10px", marginLeft: "10px" }}
      >
        {showTrailer ? "Close Trailer" : "Watch Trailer"}
      </Button>
      {showTrailer && (
        <div>
          <iframe
            width="100%"
            height="315"
            src={movie.trailerLink}
            frameBorder="0"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>
        </div>
      )}
    </Card>
  );
};

export default MovieCard;
