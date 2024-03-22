import { Styles } from "../../App";
import { colors } from "../../assets/colors";
import { CompetencesEvaluationView } from "./components/CompetencesEvaluationView";
import { GradesGraph } from "./components/GradesGraph";
import { StudentDetailsCard } from "./components/StudentDetailsCard";
import { student } from "./utils/data";

export const StudentDetailScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.viewFiller} />
      <div style={styles.header}>
        <div style={styles.title}>{student.name}</div>
        <div>Overview over {student.name.split(" ")[0]}'s results</div>
      </div>
      <div style={styles.contentContainer}>
        <GradesGraph />
        <div style={styles.innerContainer}>
          <CompetencesEvaluationView />
          <StudentDetailsCard />
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
    justifyContent: "space-around",
    height: "80vh",
    width: "100vw",
    overflow: "hidden",
  },
  title: {
    color: colors.black,
    fontSize: "2em",
    fontWeight: "bold",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    color: colors.black,
    paddingLeft: "50px",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "80%",
    height: "80%",
    gap: "20px",
  },
  viewFiller: {
    height: "20px",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    flex: 2,
    height: "100%",
    gap: "20px",
  },
};
