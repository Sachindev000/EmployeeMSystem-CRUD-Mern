import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { EmployeeDataContext } from "../context/employeeContext";

const EditModel = ({ employeeid }) => {
  const { getSingleData, setUpdateEmployee, updateEmployee ,handleEditSubmit} =
    useContext(EmployeeDataContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateEmployee({ ...updateEmployee, [name]: value });
    
  };
  const formControlStyle = {
    backgroundColor: "#ffff",
    fontSize: "15px",
    boxShadow: "none",
    border: "1px solid",
  };
  
 

  return (
    <div>
      <li
        onClick={() => {
          getSingleData(employeeid);
          handleShow();
        }}
        className="text-black font-semibold hover:bg-gray-100 p-1 cursor-pointer"
      >
        Edit
      </li>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="font-mono ml-40">Update Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">Image</Form.Label>
              <Form.Control
              style={formControlStyle}
                name="image"
                value={updateEmployee.image}
                onChange={handleChange}
                type="text"
                placeholder="Paste Url.."
              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">Name</Form.Label>
              <Form.Control
              style={formControlStyle}
                name="name"
                value={updateEmployee.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">Email address</Form.Label>
              <Form.Control
              style={formControlStyle}
                name="email"
                value={updateEmployee.email}
                onChange={handleChange}
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">Phone</Form.Label>
              <Form.Control
              style={formControlStyle}
                type="tel"
                name="phone"
                value={updateEmployee.phone}
                onChange={handleChange}
                placeholder="000-000-000"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">Job Role</Form.Label>
              <Form.Control
              style={formControlStyle}
                type="text"
                name="image"
                value={updateEmployee.jobrole}
                onChange={handleChange}
                placeholder="eg:Developer"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">SALARY</Form.Label>
              <Form.Control
              style={formControlStyle}
                type="number"
                name="salary"
                value={updateEmployee.salary}
                onChange={handleChange}
                placeholder="current salary"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold ml-2">Joined date</Form.Label>
              <Form.Control
              style={formControlStyle}
                type="date"
                name="date"
                value={updateEmployee.date}
                onChange={handleChange}
                
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:"#577BFA"}} variant="primary" onClick={()=>{handleEditSubmit(employeeid);handleClose();}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModel;
