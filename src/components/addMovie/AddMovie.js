import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({ add1 }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const handleChange1 = (e) => {
    setName(e.target.value);
  };
  const [pic, setPic] = useState("");
  const handleChange2 = (e) => {
    setPic(e.target.value);
  };
  const [genre, setGenre] = useState("");
  const handleChange3 = (e) => {
    setGenre(e.target.value);
  };
  const [rating, setRating] = useState("");
  const handleChange4 = (e) => {
    setRating(e.target.value);
  };
  const [year, setYear] = useState("");
  const handleChange5 = (e) => {
    setYear(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      Name: name,
      pic: pic,
      rating: rating,
      genre: genre,
      year: year,
    };
    if (name && pic && rating && genre && year) {
      add1(newMovie);
      setName("");
      setPic("");
      setRating(0);
      setGenre("");
      setYear("");
      handleClose();
    } else {
      alert("Add valid text!");
    }
  };

  return (
    <div>
      <Button variant="dark" onClick={handleShow} style={{ marginTop: "20px" }}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie's Details:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            action=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="">Title:</label>
            <input type="text" value={name} onChange={handleChange1} />
            <label htmlFor="">Poster:</label>
            <input type="text" value={pic} onChange={handleChange2} />
            <label htmlFor="">Rating:</label>
            <input type="text" value={rating} onChange={handleChange4} />
            <label htmlFor="">Genre:</label>
            <input type="text" value={genre} onChange={handleChange3} />

            <label htmlFor="">Year:</label>
            <input type="text" value={year} onChange={handleChange5} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(handleClose, handleSubmit)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
