import React, { createContext, useState } from "react";

export const EmpContext = createContext();

export const EmpProvider = props => {
  const [emps, setEmps] = useState([
    {
      name: "Chiranjeeb",
      age: 30,
      id: 1
    },
    {
      name: "CJena",
      age: 29,
      id: 2
    },
    {
      name: "Someone",
      age: 25,
      id: 3
    }
  ]);
  return (
    <EmpContext.Provider value={[emps, setEmps]}>
      {props.children}
    </EmpContext.Provider>
  );
};
