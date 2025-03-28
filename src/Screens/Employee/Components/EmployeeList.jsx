// src/components/EmployeeList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeList = ({ selectEmployee }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://billing.neuralionicsoft.com/employees"
      );
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  console.log(employees);

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`https://billing.neuralionicsoft.com/employees/${id}`);
      fetchEmployees(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="flex gap-4 mt-6">
            {employee.employee_name} - {employee.employee_user.user_type}{" "}
            <button
              className="px-2 py-2 bg-green-700 rounded-md font-semibold"
              onClick={() => selectEmployee(employee)}
            >
              Edit
            </button>
            <button
              className="px-2 py-2 bg-red-700 rounded-md font-semibold"
              onClick={() => deleteEmployee(employee.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
