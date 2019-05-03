import React from "react";
import "./App.css";
import EmpList from "./EmpList";
import Nav from "./Nav";
import { EmpProvider } from "./EmpContext";
import AddEmp from "./AddEmp";
function App() {
  return (
    <EmpProvider>
      <div className="App">
        {/* <header className="App-header" /> */}
        <Nav />
        <AddEmp />
        <EmpList />
      </div>
    </EmpProvider>
  );
}

export default App;
