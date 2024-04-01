import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./employeeDetails.css"
import { EmployeeDataContext } from "../context/employeeContext";

const EmployeeDetails = (props) => {
  const { updateEmployee } = useContext(EmployeeDataContext);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="profile grid place-items-center">
              <img
                src={updateEmployee.image}
                alt=""
                className="w-52 h-52 object-cover rounded-full"
              />
            </div>
          <h4 className="text-center font-serif mt-3">{updateEmployee.name}</h4>
          <div className="text-lg font-mono  m-2 p-2">
          <p>
           Email: {updateEmployee.email}
          </p>
          <p>
           Phone: {updateEmployee.phone}
          </p>
          <p>
           Job Role: {updateEmployee.jobrole}
          </p>
          <p>
           Salary:{updateEmployee.salary}₹
          </p>
          <p>
           Join Date:{updateEmployee.date}
          </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "#577BFA" }} onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EmployeeDetails;
