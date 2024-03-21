import React, { useState } from "react";
import { Styles } from "../../../App";
import { colors } from "../../../assets/colors";

enum Status {
  CorrectionsPending = "Corrections Pending",
  CorrectionsUploaded = "Corrections Uploaded",
}

const getStatusColor = (status: Status) => {
  switch (status) {
    case Status.CorrectionsPending:
      return { bg: colors.orange, border: colors.darkOrange };
    case Status.CorrectionsUploaded:
      return { bg: colors.green, border: colors.darkGreen };
  }
};

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const examData = [
    { name: 'Fractions Test', subject: 'Mathematics', date: '10.04.2024', averageGrade: 5.2, status: Status.CorrectionsUploaded, url: 'https://adrienzaradez.com/LernkontrollenMathematik.pdf' },
    { name: 'Plant Biology Quiz', subject: 'Science', date: '15.05.2024', averageGrade: null, status: Status.CorrectionsPending, url: null },
    { name: 'Swiss History Exam', subject: 'History', date: '21.03.2024', averageGrade: 5.8, status: Status.CorrectionsUploaded, url: 'https://adrienzaradez.com/LernkontrollenMathematik.pdf' },
    { name: 'Grammar and Composition', subject: 'German', date: '02.04.2024', averageGrade: 4.6, status: Status.CorrectionsUploaded, url: 'https://adrienzaradez.com/LernkontrollenMathematik.pdf' },
    { name: 'Vocabulary and Spelling Test', subject: 'English', date: '20.05.2024', averageGrade: null, status: Status.CorrectionsPending, url: null },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  let filteredExams = examData;
  if (searchInput.trim() !== "") {
    filteredExams = examData.filter((exam) =>
      exam.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  return (
    <div style={styles.container}>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
        style={styles.searchBarDesign}
      />
      <div style={styles.listContainer}>
        <div style={{ ...styles.rowContainer, ...styles.topRow }}>
          <div style={styles.firstColumn}>Name</div>
          <div style={styles.valueContainer}>Subject</div>
          <div style={styles.valueContainer}>Date</div>
          <div style={styles.valueContainer}>Average Grade</div>
          <div style={styles.valueContainer}>Status</div>
        </div>
        {[...filteredExams, ...filteredExams].map((exam, index) => (
          <div style={styles.rowContainer} key={index}>
            <div style={styles.firstColumn}>
              {exam.name}
            </div>
            <div style={styles.valueContainer}>{exam.subject}</div>
            <div style={styles.valueContainer}>{exam.date}</div>
            <div style={styles.valueContainer}>{exam.averageGrade}</div>
            <div style={styles.valueContainer}>
              <div
                style={{
                  backgroundColor: getStatusColor(exam.status).bg,
                  border: "2px solid",
                  borderColor: getStatusColor(exam.status).border,
                  borderRadius: "10px",
                  padding: "5px 10px",
                }}
              >
                {exam.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const styles: Styles = {
  searchBarDesign: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.05)", // subtle shadow
    borderRadius: "5px", // rounded borders
    border: "1px solid #e0e0e0", // light border color
    padding: "10px 20px", // inner padding top/bottom, left/right
    outline: "none", // remove focus outline
    width: "100%", // full-width
    height: "40px", // fixed height
    boxSizing: "border-box", // include padding and border in the element's total width and height
    marginBottom: "20px", // bottom margin
  },
  tableDesign: {
    width: "100%",
  },
  tableHeadDesign: {
    width: "100%",
    marginTop: "20px",
    backgroundColor: colors.background, // Use the background color from your color scheme
    borderRadius: "10px", // Set the border radius to 10px
  },
  rowContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid",
    borderBottomColor: "#e0e0e0",
    height: "60px",
  },
  valueContainer: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topRow: {
    backgroundColor: colors.background,
    padding: "10px 0",
  },
  firstColumn: {
    width: "30%",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  pictureContainer: {
    margin: "10px",
    border: "3px solid red",
    borderRadius: "50px",
    display: "flex",
    borderBlockColor: colors.primary,
    alignItems: "center",
  },
  listContainer: {},
  container: {
    overflow: "scroll",
    height: "100%",
  },
};
