import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { EmployeeDataProvider } from "./context/employeeContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeeDataProvider>
      <App />
      
    </EmployeeDataProvider>
  </React.StrictMode>
);
