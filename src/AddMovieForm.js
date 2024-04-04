import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const AddMovieForm = ({ onSubmit }) => {
  // State variables for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [trailerLink, setTrailerLink] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create an object to store form data
    const newMovie = {
      title: title,
      description: description,
      rating: rating,
      trailerLink: trailerLink,
    };

    // Call onSubmit function with form data object
    onSubmit(newMovie);

    // Reset form inputs after submission
    setTitle("");
    setDescription("");
    setRating("");
    setTrailerLink("");
  };

  // Function to handle rating input change
  const handleRatingChange = (e) => {
    const inputRating = e.target.value;
    if (!isNaN(inputRating) && inputRating >= 1 && inputRating <= 10) {
      setRating(inputRating.toString());
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Add New Movie</h2>
          <Form onSubmit={handleSubmit}>
            {/* Title Input */}
            <Form.Group controlId="title">
              <Form.Label className="mb-0">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            {/* Description Input */}
            <Form.Group controlId="description">
              <Form.Label className="mb-0">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            {/* Rating Input */}
            <Form.Group controlId="rating">
              <Form.Label className="mb-0">Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter rating (1-10)"
                min="1"
                max="10"
                value={rating}
                onChange={handleRatingChange}
              />
            </Form.Group>

            {/* Trailer Link Input */}
            <Form.Group controlId="trailerLink">
              <Form.Label className="mb-0">Trailer Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter trailer link"
                value={trailerLink}
                onChange={(e) => setTrailerLink(e.target.value)}
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit">
              Add Movie
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddMovieForm;
