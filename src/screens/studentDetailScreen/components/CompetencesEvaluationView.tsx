import { Styles } from "../../../App";
import { colors } from "../../../assets/colors";
import { studentTestedCompetences } from "../utils/data";

export const CompetencesEvaluationView = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headline}>Competences</div>
      <div style={styles.evaluations}>
        {studentTestedCompetences.map((competence, index) => {
          return (
            <div style={styles.singleEvaluation}>
              <div>{competence.name}</div>
              <div style={styles.stars}>
                {new Array(competence.result).fill("").map((_, i) => {
                  return <span>{"⭐️"}</span>;
                })}
                {new Array(5 - competence.result).fill("").map((_, i) => {
                  return <span style={{ opacity: 0.3 }}>{"⭐️"}</span>;
                })}
              </div>
            </div>
          );
        })}
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
    height: "40%",
    padding: "20px",
    overflow: "hidden",
    border: "1px solid",
    borderColor: colors.darkGrey,
    borderRadius: "10px",
    width: "100%",
  },
  headline: {
    fontSize: "1.7em",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  evaluations: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    gap: "10px",
    fontSize: ".8em",
    overflow: "scroll",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "20px",
  },
  singleEvaluation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "20px 10px",
    border: "0.5px solid",
    borderRadius: "10px",
    borderColor: colors.darkGrey,
  },
};
