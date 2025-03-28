import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function Employes() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div>
      <h1 className="text-2xl">Employee Management</h1>
      <EmployeeForm employee={selectedEmployee} setEmployees={setEmployees} />
      <EmployeeList setEmployees={setEmployees} />
    </div>
  );
}

export default Employes;
