import React, { useState, useContext } from "react";
import Emp from "./Emp";
import { EmpContext } from "./EmpContext";

const EmpList = () => {
  const [emps, setEmps] = useContext(EmpContext);
  return (
    <div>
      {emps.map(emp => (
        <Emp name={emp.name} age={emp.age} key={emp.id} />
      ))}
    </div>
  );
};
export default EmpList;
