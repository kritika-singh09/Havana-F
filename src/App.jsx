import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ListBooking from './components/Banquet/pages/Students/ListBooking';
import Users from './components/Users/Users';
import './App.css'

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            
            {/* Booking Routes */}
            <Route path="booking" element={<div>Booking Component</div>} />
            <Route path="reservation" element={<div>Reservation Component</div>} />
            
            {/* Inventory Routes */}
            <Route path="inventory" element={<div>Inventory Component</div>} />
            
            {/* Banquet Routes */}
            <Route path="banquet/calendar" element={<div>Banquet Calendar</div>} />
            <Route path="banquet/list-booking" element={<ListBooking />} />
            <Route path="banquet/menu-plan-manager" element={<div>Menu Plan Manager</div>} />
            
            {/* Users Routes */}
            <Route path="users" element={<Users />} />
          </Route>
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App
