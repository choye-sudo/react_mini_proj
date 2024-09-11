import { useState } from 'react';
import './App.css';
import CustomForm from './components/customform/CustomForm';
import Test from './components/test/Test';
import Calc from './components/calc';


function App() {
  const [page, setPage] = useState("Test");
  
  return (
    <div className="App">
      <button onClick={()=>setPage("Test")}> Test</button>
      <button onClick={()=>setPage("calc")}> calc</button>
      {page === "Test"&& <Test />}
      {page === "calc"&& <Calc />}
    </div>
  );
}

export default App;
