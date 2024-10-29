import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SRT from "./Pages/SRT";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="srt" element={<SRT/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
       </Routes>
    </div>
  );
}

export default App;
