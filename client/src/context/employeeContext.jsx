import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../api";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export const EmployeeDataContext = createContext();

export const EmployeeDataProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [validated, setValidated] = useState(false);
  const [searchEmployee, setSearchEmployee] = useState("");
  const [updateEmployee, setUpdateEmployee] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
    jobrole: "",
    salary:"",
    date:""
  });

  const [inputValue, setInputValue] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
    jobrole: "",
    salary:"",
    date:""
  });

  const resetInputValue = () => {
    setInputValue({
      image: "",
      name: "",
      email: "",
      phone: "",
      jobrole: "",
      salary:"",
      date:""
    });
  };

  const handleSearchInputChange = (e) => {
    const searchInput = e.target.value.toLowerCase();
    setSearchEmployee(searchInput);

    if (searchInput === "") {
      getAllData();
      return;
    }
    const filteredEmployees = employeeData.filter((employee) =>
      employee.name.toLowerCase().includes(searchInput)
    );

    setEmployeeData(filteredEmployees);
  };

  const getAllData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getAllEmployees`);
      setEmployeeData(res.data.data);
    } catch (error) {
      console.error("Error while getting data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    try {
      const id = uuidv4();
      await axios.post(`${BASE_URL}/add`, inputValue, id);
      toast.success("Added Successfully");
      resetInputValue();
    } catch (error) {
      console.error("Error while submitting data:", error);
      toast.error("Failed to add Employee. Please Fill input Proper.");
    }
    getAllData();
  };

  const getSingleData = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/getEmployeeById/${id}`);
      const employeeData = res.data.data;
      if (employeeData) {
        setUpdateEmployee(employeeData);
      } else {
        console.log("Incomplete employee data received:", res.data);
      }
    } catch (error) {
      console.error("Error fetching employeedata:", error);
    }
  };

  const handleEditSubmit = async (id) => {
    try {
      await axios.put(`${BASE_URL}/updateEmployee/${id}`, updateEmployee);
      toast.success("Updated Successfully");
    } catch (error) {
      console.error("Error while updating employee:", error);
    }
    getAllData();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/deleteEmployee/${id}`);
      toast.success("Deleted Successfully");
      getAllData();
    } catch (error) {
      console.error("Error while deleting data:", error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <EmployeeDataContext.Provider
      value={{
        employeeData,
        getAllData,
        setInputValue,
        inputValue,
        handleSubmitData,
        handleDelete,
        getSingleData,
        setUpdateEmployee,
        updateEmployee,
        handleEditSubmit,
        handleSearchInputChange,
        isLoading,
      }}
    >
      {children}
    </EmployeeDataContext.Provider>
  );
};
