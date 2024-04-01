import React, { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditModel from "./EditModel";
import { EmployeeDataContext } from "../context/employeeContext";
import EmployeeDetails from "./EmployeeDetails";
import { ThreeDots } from "react-loader-spinner";

const Cards = () => {
  const [activeCard, setActiveCard] = useState(null);
  const { employeeData, handleDelete, getSingleData, isLoading } =
    useContext(EmployeeDataContext);
  const [modalShow, setModalShow] = useState(false);

  const toggleDropDown = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <>
      {isLoading ? (
        <div className="mt-5 flex items-center justify-center gap-2">
          <p className="font-mono text-lg mb-1">Loading</p>
          <ThreeDots
            visible={true}
            height="60"
            width="60"
            color="#577BFA"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        employeeData.map((employee, index) => (
          <div
            key={index}
            className="card-component bg-white w-[300px] rounded-md shadow-md mt-5  hover:shadow-lg relative"
          >
            <div className="card-inner p-4 flex flex-col items-center border">
              <BsThreeDotsVertical
                className="absolute top-0 right-0 m-2 cursor-pointer"
                onClick={() => toggleDropDown(index)}
              />

              {activeCard === index && (
                <div className="absolute">
                  <ul
                    className="dropdown  w-32 rounded-md p-1 left-20 bg-white shadow-md "
                    onMouseLeave={() => toggleDropDown(index)}
                  >
                    <div className="">
                      <EditModel employeeid={employee._id} />
                      <li
                        onClick={() => handleDelete(employee._id)}
                        className="text-red-500 font-semibold hover:bg-gray-100 p-1 cursor-pointer"
                      >
                        Delete
                      </li>
                    </div>
                  </ul>
                </div>
              )}
              <div
                className="cursor-pointer"
                onClick={() => {
                  setModalShow(true);
                  getSingleData(employee._id);
                }}
              >
                <div className="profile grid place-items-center">
                  <img
                    src={employee.image}
                    alt=""
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>
                <div className="emp-details mt-12 text-center">
                  <h3>{employee.name}</h3>
                  <p className="mt-2">{employee.email}</p>
                  <p className="mt-2">{employee.phone}</p>
                </div>

                <div className="jobrole bg-white h-12 text-black border-t w-full flex justify-center items-center">
                  <p>{employee.jobrole}</p>
                </div>
              </div>
              <EmployeeDetails
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Cards;
