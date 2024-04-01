const express = require("express");
const router = express.Router();
const employees = require("../models/employeeSchema");

router.post("/add", async (req, res) => {
  const { image, name, email, phone, jobrole,salary,date } = req.body;

  if (!image || !name || !email || !phone || !jobrole || !salary || !date) {
    return res.status(400).json({ message: "Please fill all the data" });
  }

  try {
    const addEmployee = new employees({
      image,
      name,
      email,
      phone,
      jobrole,
      salary,
      date
    });
    await addEmployee.save();
    console.log(addEmployee);
    return res.status(201).json({ message: "Employee Added Successfully" });
  } catch (error) {
    console.error("Error adding employee:", error);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.get("/getAllEmployees", async (req, res) => {
  try {
    const employeeData = await employees.find();
    // console.log(employeeData);
    return res
      .status(200)
      .json({ message: "Successfully retrieved data", data: employeeData });
  } catch (error) {
    console.error("Error retrieving data:", error);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.get("/getEmployeeById/:id", async (req, res) => {
  const employeeId = req.params.id;
  try {
    const employeeData = await employees.findById(employeeId);
    if (!employeeData) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res
      .status(200)
      .json({ message: "Employee retrieved successfully", data: employeeData });
  } catch (error) {
    console.error("Error retrieving employee:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/updateEmployee/:id", async (req, res) => {
  const { image, name, email, phone, jobrole,salary,date } = req.body;
  const employeeId = req.params.id;
  try {
    const employeeData = await employees.findByIdAndUpdate(employeeId, {
      image,
      name,
      email,
      phone,
      jobrole,
      salary,
      date
    });
    if (!employeeData) {
      return res.send(404).json({ message: "Employee Not Found" });
    }
    res.json({ message: "EmployeeData Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/deleteEmployee/:id", async (req, res) => {
  const employeeId = req.params.id;
  try {
    await employees.findByIdAndDelete(employeeId);
    res.status(201).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
