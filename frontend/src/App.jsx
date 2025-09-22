import React from "react";
import { Routes, Route, Navigate } from "react-router";
import SignUp from "./pages/signUp";
import SignIn from "./pages/SignIn";
import ForgotPasswprd from "./pages/ForgotPasswprd";
import useGetCurrentUser from "./hooks/useGetCurrentUser";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import useGetCity from "./hooks/useGetCity";
export const serverUrl = "http://localhost:8000";

function App() {
  useGetCurrentUser();
  useGetCity();
  const { userData } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route
        path="/signup"
        element={!userData ? <SignUp /> : <Navigate to="/" replace />}
      />
      <Route
        path="/signin"
        element={!userData ? <SignIn /> : <Navigate to="/" replace />}
      />
      <Route
        path="/forgot-password"
        element={!userData ? <ForgotPasswprd /> : <Navigate to="/" replace />}
      />
      <Route
        path="/"
        element={userData ? <Home /> : <Navigate to="/signin" replace />}
      />
    </Routes>
  );
}

export default App;
