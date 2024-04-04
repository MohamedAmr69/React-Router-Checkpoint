import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const MovieDetails = ({ movies }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = movies[parseInt(id)];

  const goBack = () => {
    navigate(-1);
  };

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="100%"
        height="315"
        src={movie.trailerLink}
        frameBorder="0"
        allowFullScreen
        title="Movie Trailer"
      ></iframe>
      <Button onClick={goBack}>Go Back</Button>
    </div>
  );
};

export default MovieDetails;
