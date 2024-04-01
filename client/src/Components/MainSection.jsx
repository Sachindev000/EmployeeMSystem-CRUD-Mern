import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { IoSearch } from "react-icons/io5";
import Cards from "./Cards";
import AddModel from "./AddModel";

import { EmployeeDataContext } from "../context/employeeContext";

const MainSection = () => {
  const { employeeData, handleSearchInputChange } =
    useContext(EmployeeDataContext);

  return (
    <>
      <div className="lg:p-5  mt-16">
        <div
          className=" m-auto  border p-5 "
          style={{ backgroundColor: "#F7F6FB" }}
        >
          <h1 className="font-bold text-2xl">
            Employees:{employeeData.length}
          </h1>
          <div className="flex justify-between flex-wrap  items-center mt-4">
            <div className=" bg-white h-10 w-80 ">
              <Form
                className="relative "
                style={{ backgroundColor: "#ecedf6" }}
              >
                <Form.Control
                  className="border-2"
                  style={{
                    backgroundColor: "#ecedf6",
                    fontSize: "15px",
                    boxShadow: "none",
                    border: "1px solid ",
                  }}
                  type="search"
                  placeholder="Search by Name"
                  aria-label="Search"
                  onChange={handleSearchInputChange}
                />
                <IoSearch
                  size={26}
                  className="absolute  top-2 end-3 cursor-pointer"
                />
              </Form>
            </div>
            <AddModel />
          </div>
          <div className="grid place-content-center sm:place-content-center grid-cols md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 ">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
