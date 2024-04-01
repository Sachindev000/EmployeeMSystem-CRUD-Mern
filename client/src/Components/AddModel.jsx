import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { EmployeeDataContext } from "../context/employeeContext";

const AddModel = () => {
  const { inputValue, handleSubmitData, setInputValue } =
    useContext(EmployeeDataContext);
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const formControlStyle = {
    backgroundColor: "#ffff",
    fontSize: "15px",
    boxShadow: "none",
    border: "1px solid",
  };

  return (
    <div>
      <button
        onClick={handleShow}
        style={{ backgroundColor: "#577BFA" }}
        className="p-1 rounded-md text-white font-medium"
      >
        <span className="text-md">+</span>Add Employees
      </button>

      <Modal show={show} onHide={handleClose} style={{}}>
        <Modal.Header closeButton>
          <Modal.Title className="font-mono ml-40">Add Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">IMAGE</Form.Label>
              <Form.Control
                style={formControlStyle}
                type="text"
                name="image"
                value={inputValue.image}
                onChange={handleInputChange}
                placeholder="Paste Url.."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">NAME</Form.Label>
              <Form.Control
                style={formControlStyle}
                type="text"
                name="name"
                value={inputValue.name}
                onChange={handleInputChange}
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">EMAIL</Form.Label>
              <Form.Control
                style={formControlStyle}
                type="email"
                name="email"
                value={inputValue.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">PHONE</Form.Label>
              <Form.Control
                style={formControlStyle}
                type="tel"
                name="phone"
                value={inputValue.phone}
                onChange={handleInputChange}
                placeholder="000-000-000"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">JOB ROLE</Form.Label>
              <Form.Control
                style={formControlStyle}
                type="text"
                name="jobrole"
                value={inputValue.jobrole}
                onChange={handleInputChange}
                placeholder="eg:Developer"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">SALARY</Form.Label>
              <Form.Control
                style={formControlStyle}
                type="number"
                name="salary"
                value={inputValue.salary}
                onChange={handleInputChange}
                placeholder="current salary"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">Joined Date</Form.Label>
              <Form.Control
                style={formControlStyle}
                type="date"
                name="date"
                value={inputValue.date}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            onClick={(e) => {
              handleSubmitData(e);
              handleClose();
            }}
            variant="primary"
            style={{ backgroundColor: "#577BFA" }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModel;
