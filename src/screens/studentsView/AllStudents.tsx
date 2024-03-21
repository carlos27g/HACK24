import { Styles } from "../../App";
import SearchBar from "./Components/SearchBar";
import { colors } from "../../assets/colors";

export const AllStudents = () => {
  return <div style={styles.mainContainer}>
    <div style ={styles.titleDesign}>Students</div>
    <div style ={styles.subtitleDesign}>Your student list is synched with the school's intranet.</div>
    <SearchBar/>
    </div>;
};

const styles: Styles = {
    mainContainer: {
        height: "100vh",
        width: "90vw",
        padding: "0 5%",
        marginTop: "10vh",
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
    }
}
