import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function AddForm() {
  const nav = useNavigate();
  const [name, setName] = useState([""]);
  const [description, setDescription] = useState([""]);
  const [priority, setPriority] = useState([""]);
  const addTask = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/task/add", { name, description, priority })
      .then((res) => {
        nav("/taches");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={addTask}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPriority">
        <Form.Label>Priority</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter priority"
          onChange={(e) => {
            setPriority(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddForm;
