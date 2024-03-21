import React, { CSSProperties } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/homeScreen/HomeScreen";
import NavBar from "./components/Navbar";
import { AddExamScreen } from "./screens/addExamScreen/AddExamScreen";
import { StudentsOverviewScreen } from "./screens/studentsOverviewScreen/StudentsOverviewScreen";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/add-new-exam" element={<AddExamScreen />} />
          <Route path="/all-students" element={<StudentsOverviewScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export type Styles = { [key: string]: CSSProperties };
export default App;
export { db };
