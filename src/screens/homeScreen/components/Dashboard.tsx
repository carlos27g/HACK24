import React from "react";
import { Styles } from "../../../App";
import { colors } from "../../../assets/colors";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";
import PlusCircle from "../../../assets/svgAssets/PlusCircle.svg";
import Student from "../../../assets/svgAssets/Student.svg";
import Exam from "../../../assets/svgAssets/Exam.svg";
import { useNavigate, useNavigation } from "react-router-dom";

export const Dashboard = () => {
  const totalCompetences = 30;
  const testedCompetences = 20;
  const percentageCompetences = (testedCompetences / totalCompetences) * 100;
  const totalSubmittedExams = 10;
  const totalCorrectedExams = 5;

  const navigate = useNavigate();

  const onAddExamClick = () => {
    navigate("/add-new-exam");
  };

  const onViewStudentsClick = () => {
    navigate("/all-students");
  };

  const onViewExamsClick = () => {
    navigate("/all-exams");
  };
  return (
    <div style={styles.dashboardContainer}>
      <div className="dashboardGridContainer">
        <div
          className={"dashboardSimpleButton dashboardGridArea1"}
          style={styles.dashboardSimpleButton}
          onClick={onAddExamClick}
        >
          <img src={PlusCircle} alt="Add Exam" width={64} />
          <h2 style={styles.buttonLabel}>Add new Exam</h2>
        </div>
        <div
          className={"dashboardSimpleButton dashboardGridArea2"}
          style={styles.dashboardSimpleButton}
          onClick={onViewStudentsClick}
        >
          <img src={Student} alt="View Students" width={64} />
          <h2 style={styles.buttonLabel}>View Students</h2>
        </div>
        <div
          className={"dashboardSimpleButton dashboardGridArea3"}
          style={styles.dashboardSimpleButton}
          onClick={onViewExamsClick}
        >
          <img src={Exam} alt="View Exams" width={64} />
          <h2 style={styles.buttonLabel}>View Exams</h2>
        </div>
        <div style={styles.featureContainer} className="dashboardGridArea4">
          <h1 style={styles.featureTitle}>Tested Competences</h1>
          <div style={{ maxWidth: "200px" }}>
            <CircularProgressbar
              value={Math.round(percentageCompetences)}
              text={`${Math.round(percentageCompetences)}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 2,
                // Colors
                pathColor: colors.black,
                textColor: colors.black,
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
        </div>
        <div style={styles.featureContainer} className="dashboardGridArea5">
          <h1 style={styles.featureTitle}>
            {totalCorrectedExams} out of {totalSubmittedExams} submitted Exams
            have been corrected.
          </h1>
          <div style={{ width: "200px" }}>
            <ProgressBar
              completed={Math.round(
                (totalCorrectedExams / totalSubmittedExams) * 100
              )}
              bgColor={colors.black}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Styles = {
  dashboardContainer: {
    height: "100vh",
    width: "80vw",
    padding: "0 10%",
    marginTop: "10vh",
  },
  upperRow: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    flexWrap: "wrap",
    gap: "10px",
  },
  dashboardSimpleButton: {
    cursor: "pointer",
    border: "2px solid",
    borderColor: colors.primary,
    padding: "10px 100px",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
    flexDirection: "column",
    alignItems: "center",
  },
  lowerRow: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    gap: "10px",
  },
  featureContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flex: 1,
    padding: "20px",
    borderRadius: "20px",
    backgroundColor: colors.background,
    color: colors.primary,
  },
  featureTitle: {
    textAlign: "center",
  },
  buttonLabel: {
    textAlign: "center",
  },
};
