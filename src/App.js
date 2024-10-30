import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SRT from "./Pages/SRT";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute" // Adjust the import path as necessary

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="srt" element={<SRT />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        {/* Wrap all protected routes in a ProtectedRoute */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
