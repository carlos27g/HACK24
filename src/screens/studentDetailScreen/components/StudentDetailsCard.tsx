import { Styles } from "../../../App";
import { colors } from "../../../assets/colors";
import { student } from "../utils/data";

export const StudentDetailsCard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headertext}>
          <div style={styles.title}>{student.name}</div>
          <div style={styles.subtitle}>Personal Information</div>
        </div>
        <img
          style={styles.pictureContainer}
          src={student.picture}
          alt={student.name}
          width="50"
          height="50"
        />
      </div>
      <div style={styles.infoContainer}>
        <div style={styles.valueContainer}>
          <div style={styles.label}>Age</div>
          <div style={styles.text}>{student.age}</div>
        </div>
        <div style={styles.valueContainer}>
          <div style={styles.label}>Father</div>
          <div style={styles.text}>{student.father}</div>
        </div>
        <div style={styles.valueContainer}>
          <div style={styles.label}>Phone Number</div>
          <div style={styles.text}>{student.phoneContact}</div>
        </div>
        <div style={styles.valueContainer}>
          <div style={styles.label}>Acquired Competences</div>
          <div style={styles.text}>{student.competencies}</div>
        </div>
        <div style={styles.valueContainer}>
          <div style={styles.label}>Status</div>
          <div style={styles.text}>{student.status}</div>
        </div>
        <div style={styles.valueContainer}>
          <div style={styles.label}>Language</div>
          <div style={styles.text}>{student.primaryLanguage}</div>
        </div>
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    width: "100%",
    height: "40%",
    border: "1px solid",
    borderColor: colors.darkGrey,
    borderRadius: "10px",
    padding: "20px",
    overflow: "hidden",
  },
  title: {
    color: colors.primary,
    fontSize: "1.5em",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    color: colors.primary,
    fontSize: "1em",
    marginBottom: "10px",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: "20px",
    height: "60%",
    overflow: "scroll",
  },
  text: {
    color: colors.black,
    fontSize: "1em",
    marginBottom: "10px",
  },
  pictureContainer: {
    margin: "10px",
    border: "3px solid red",
    borderRadius: "50px",
    display: "flex",
    borderBlockColor: colors.primary,
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  valueContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  label: {
    color: colors.darkGrey,
    fontSize: "1em",
  },
};
