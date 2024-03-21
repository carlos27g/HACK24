import React, { CSSProperties } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/homeScreen/HomeScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export type Styles = { [key: string]: CSSProperties };
export default App;
