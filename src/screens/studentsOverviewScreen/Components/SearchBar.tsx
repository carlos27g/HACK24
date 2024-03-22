import React, { useState } from "react";
import { Styles } from "../../../App";
import { colors } from "../../../assets/colors";
import { useNavigate } from "react-router-dom";

export enum Status {
  RequiresAttention = "Requires Attention",
  OnTrack = "On Track",
}

const getStatusColor = (status: Status) => {
  switch (status) {
    case Status.RequiresAttention:
      return { bg: colors.orange, border: colors.darkOrange };
    case Status.OnTrack:
      return { bg: colors.green, border: colors.darkGreen };
  }
};

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const studentData = [
    {
      name: "Mathilde Trösch",
      competencies: 22,
      progress: 10,
      status: Status.RequiresAttention,
      picture: "https://adrienzaradez.com/mathilde.png",
    },
    {
      name: "Laura Frey",
      competencies: 25,
      progress: -45,
      status: Status.OnTrack,
      picture: "https://adrienzaradez.com/laura.png",
    },
    {
      name: "Elias Baumann",
      competencies: 27,
      progress: 2,
      status: Status.RequiresAttention,
      picture: "https://adrienzaradez.com/elias.png",
    },
    {
      name: "Hendrik Rodriguez",
      competencies: 30,
      progress: -60,
      status: Status.RequiresAttention,
      picture: "https://adrienzaradez.com/hendrik.png",
    },
    {
      name: "Justin Hauser",
      competencies: 43,
      progress: 40,
      status: Status.OnTrack,
      picture: "https://adrienzaradez.com/justin.png",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  let filteredStudents = studentData;
  if (searchInput.trim() !== "") {
    filteredStudents = studentData.filter((student) =>
      student.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  const handleNavigateToStudentDetail = () => {
    navigate("/student-details");
  };

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
          <div style={styles.valueContainer}>Competencies</div>
          <div style={styles.valueContainer}>Progress</div>
          <div style={styles.valueContainer}>Status</div>
        </div>
        {[...filteredStudents, ...filteredStudents].map((student, index) => (
          <div
            className="searchBarRowContainer"
            style={styles.rowContainer}
            key={index}
            onClick={handleNavigateToStudentDetail}
          >
            <div style={styles.firstColumn}>
              <img
                style={styles.pictureContainer}
                src={student.picture}
                alt={student.name}
                width="50"
                height="50"
              />
              {student.name}
            </div>
            <div style={styles.valueContainer}>{student.competencies}</div>
            <div style={styles.valueContainer}>{student.progress}</div>
            <div style={styles.valueContainer}>
              <div
                style={{
                  backgroundColor: getStatusColor(student.status).bg,
                  border: "2px solid",
                  borderColor: getStatusColor(student.status).border,
                  borderRadius: "10px",
                  padding: "5px 10px",
                }}
              >
                {student.status}
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
    width: "40%",
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
