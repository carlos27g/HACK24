import React, { CSSProperties } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/homeScreen/HomeScreen";
import NavBar from "./components/Navbar";
import { AddExamScreen } from "./screens/addExamScreen/AddExamScreen";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/add-new-exam" element={<AddExamScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export type Styles = { [key: string]: CSSProperties };
export default App;
