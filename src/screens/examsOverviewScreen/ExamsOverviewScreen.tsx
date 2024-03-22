import { Styles } from "../../App";
import { SearchBar } from "./Components/SearchBar";
import { colors } from "../../assets/colors";

export const ExamsOverviewScreen = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.titleDesign}>Exams</div>
        <div style={styles.subtitleDesign}>
          Once you have created your exam, upload it to our platform and we will compare it with the competences of the Lehrplan 21. Once you have corrected your students' exams, you can upload the results and we will store them for you. It's that simple!
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

const styles: Styles = {
  innerContainer: {
    width: "80%",
    height: "70vh",
    padding: "50px 0",
  },
  mainContainer: {
    height: "100%",
    width: "100vw",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titleDesign: {
    color: colors.black,
    fontSize: "2em",
    marginBottom: "5px",
  },
  subtitleDesign: {
    color: colors.subtitle,
    fontSize: "1em",
    marginBottom: "10px",
  },
};
