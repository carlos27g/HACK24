import React from "react";
import { Styles } from "../../../App";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../../App";

export const Dashboard = () => {
  const onAddExamClick = async () => {
    console.log("Add Exam Clicked");

    try {
        await setDoc(doc(db, "classes", "exams"), {
            name: "Addition of Fractions",
            subject: "math",
            date: "2024-10-10",
        });

        console.log("Document written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
};


  const onViewStudentsClick = () => {
    console.log("View Students Clicked");
  };

  const onViewExamsClick = () => {
    console.log("View Exams Clicked");
  };
  return (
    <div style={styles.container}>
      <div onClick={onAddExamClick}>Add New Exam</div>
      <div onClick={onViewStudentsClick}>View Students</div>
      <div onClick={onViewExamsClick}>View Exams</div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
