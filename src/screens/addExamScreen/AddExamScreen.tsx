import { useEffect, useState } from "react";
import { Styles } from "../../App";
import { colors } from "../../assets/colors";
import Close from "../../assets/svgAssets/Close.svg";
import Document from "../../assets/svgAssets/Document.svg";
import { TextInput } from "../../components/TextInput";
import { Tag } from "../../components/Tag";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useRef } from 'react';
const ExamQR = require("../../assets/docs/LernkontrollenMathematikQR.pdf");

const competences = [
  ["Addition", "Subtraction", "Multiplication"],
  ["Division", "Fractions", "Decimals"],
  ["Geometry", "Algebra", "Statistics"],
];

export const AddExamScreen = () => {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadConfirmed, setUploadConfirmed] = useState(false);
  const [examName, setExamName] = useState("");
  const [learningGoals, setLearningGoals] = useState<string[]>([
    "Addition",
    "Fractions",
    "Algebra",
  ]);

  const onLearningGoalSelect = (learningGoal: string, index: number) => {
    setLearningGoals((prevLearningGoals) => {
      const newLearningGoals = [...prevLearningGoals];
      if (newLearningGoals[index] === learningGoal) {
        newLearningGoals[index] = "";
      } else {
        newLearningGoals[index] = learningGoal;
      }
      return newLearningGoals;
    });
  };

  const isTagSelected = (tag: string, index: number) => {
    console.log(learningGoals[index], tag);
    return learningGoals[index] === tag;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    console.log(previewUrl);
  }, [previewUrl]);

  const handleCreateExam = () => {
    if (uploadedFile) setUploadConfirmed(true);
  };

  const handlePrint = () => {
    // Ensure the iframe and its contentWindow are loaded before calling print
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.print();
    } else {
      console.error('Unable to access iframe content for printing');
    }
  };

  const handleClose = () => {
    navigate("/home");
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.header}>
          <div style={styles.titleContainer}>
            <span style={styles.title}>Create new exam</span>
            <span>Simply upload your exam and we will process it for you</span>
          </div>
          <div onClick={handleClose} style={styles.closeButton}>
            <img src={Close} alt="close" width={64} />
          </div>
        </div>
        {!uploadConfirmed ? (
          <>
            <div style={styles.uploadContainer}>
              {uploadedFile ? (
                <div>
                  <span style={styles.title}>Uploaded File:</span>
                  <br />
                  <span>{uploadedFile?.name}</span>
                </div>
              ) : (
                <label
                  htmlFor="file-upload"
                  style={{ cursor: "pointer", textAlign: "center" }}
                >
                  <img src={Document} alt="document" width={64} />
                  <br />
                  <span style={styles.title}>Upload Exam</span>
                  <br />
                  <span>Drag and drop your exam here or click to upload</span>
                </label>
              )}
              <input
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleChange}
              />
            </div>
          </>
        ) : (
          <div style={styles.resultContainer}>
            <div style={styles.examPreviewContainer}>
              <iframe
                src={
                  "https://adrienzaradez.com/LernkontrollenMathematik.pdf#toolbar=0"
                }
                width="90%"
                height="90%"
              />
            </div>
            <div style={styles.examProperties}>
              <TextInput
                label={"Exam name"}
                value={examName}
                onChange={setExamName}
              />
              <div style={styles.competencesContainer}>
                {competences.map((competence, index) => (
                  <div>
                    <div style={styles.singleLearningGoalTitle}>
                      Lernziel {index + 1}
                    </div>
                    <div style={styles.singleLearningGoalTags} key={index}>
                      {competence.map((tag, i) => (
                        <Tag
                          key={i}
                          value={tag}
                          selected={isTagSelected(tag, index)}
                          onPress={() => onLearningGoalSelect(tag, index)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div style={styles.buttonContainer}>
          {uploadConfirmed && <div style={styles.secondaryButton} onClick={handlePrint}>
            Print exam
            <iframe
              src={ExamQR}
              ref={iframeRef}
              style={{ display: 'none' }}
              title="PDF Print Frame"
            />
          </div>}
          <div style={styles.button} onClick={handleCreateExam}>
            {!uploadConfirmed ? "Create Exam" : "Confirm Exam Upload"}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    width: "80vw",
    gap: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 1)", // Add elevation effect
    border: "1px solid #f0f0f0",
    borderRadius: "20px",
    padding: "20px",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: colors.black,
    fontWeight: "lighter",
    fontSize: "xx-large",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    width: "90%",
  },
  uploadContainer: {
    height: "50%",
    width: "90%",
    borderRadius: "20px",
    backgroundColor: colors.background,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    height: "60%",
    width: "90%",
  },
  button: {
    padding: "20px 40px",
    backgroundColor: colors.primary,
    color: colors.white,
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "large",
    fontWeight: "normal",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "90%",
    gap: "20px",
  },
  examPreviewContainer: {
    width: "50%",
    height: "100%",
    borderRadius: "20px",
    border: "1px solid #f0f0f0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  examProperties: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    gap: "20px",
  },
  singleLearningGoalTags: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "5px",
  },
  singleLearningGoalTitle: {
    color: colors.grey,
    fontWeight: "normal",
    margin: "0 10px",
  },
  competencesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  secondaryButton: {
    padding: "20px 40px",
    backgroundColor: colors.white,
    color: colors.primary,
    border: "1px solid ",
    borderColor: colors.primary,
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "large",
    fontWeight: "normal",
  },
  closeButton: {
    cursor: "pointer",
  },
};
