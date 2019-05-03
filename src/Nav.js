import React, { useContext } from "react";
import "./App.css";
import { EmpContext } from "./EmpContext";

const Nav = () => {
  const [emps, setEmps] = useContext(EmpContext);
  return (
    <header className="App-header">
      <h2>Employee Count ({emps.length})</h2>
    </header>
  );
};
export default Nav;
