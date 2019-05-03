import React, { useState, useContext } from "react";
import { EmpContext } from "./EmpContext";

const AddEmp = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [emps, setEmps] = useContext(EmpContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updateAge = e => {
    setAge(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEmps(prevEmps => [...prevEmps, { name: name, age: age }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="number" name="age" value={age} onChange={updateAge} />
      <button>Submit</button>
    </form>
  );
};
export default AddEmp;
