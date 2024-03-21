import React from "react";
import { Styles } from "../../../App";

export const Dashboard = () => {
  const onAddExamClick = () => {
    console.log("Add Exam Clicked");
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
