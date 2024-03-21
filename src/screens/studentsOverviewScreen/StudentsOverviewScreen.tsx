import { Styles } from "../../App";
import { SearchBar } from "./Components/SearchBar";
import { colors } from "../../assets/colors";

export const StudentsOverviewScreen = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.titleDesign}>Students</div>
        <div style={styles.subtitleDesign}>
          Your student list is synched with the school's intranet.
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
