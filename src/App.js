// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SRT from './Pages/SRT';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import PropertyDetail from './Pages/PropertyDetail'; // Placeholder for dynamic property page
import ViewMore from './Pages/ViewMore';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="srt" element={<SRT />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="viewMore" element={<ViewMore />} />
      <Route path="property/:id" element={<PropertyDetail />} />

      {/* Wrap all protected routes in a ProtectedRoute */}
      <Route element={<ProtectedRoute allowedRoles={['admin', 'user']} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
