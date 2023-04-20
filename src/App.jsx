import React from "react";
import { Routes,Route} from "react-router-dom";
import "./App.css";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
   
        <Route index element={<Home />} />

      </Routes>
    </div>
  );
};
export default App;
