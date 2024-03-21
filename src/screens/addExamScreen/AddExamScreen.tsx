import { Styles } from "../../App";
import { colors } from "../../assets/colors";
import Close from "../../assets/svgAssets/Close.svg";

export const AddExamScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.header}>
          <div style={styles.titleContainer}>
            <span style={styles.title}>Create new exam</span>
            <span>Simply upload your exam and we will process it for you</span>
          </div>
          <div>
            <img src={Close} alt="close" width={64} />
          </div>
        </div>
        <div style={styles.uploadContainer}></div>
        <div style={styles.buttonContainer}></div>
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
    gap: "10%",
    height: "60vh",
    width: "60vw",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 1)", // Add elevation effect
    border: "1px solid #f0f0f0",
    borderRadius: "20px",
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
  },
  uploadContainer: {
    height: "50%",
    width: "90%",
    borderRadius: "20px",
    backgroundColor: colors.background,
  },
};
