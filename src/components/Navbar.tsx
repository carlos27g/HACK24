import React from "react";
import { Styles } from "../App";

const NavBar = () => {
  const onLogout = () => {
    console.log("Logout Clicked");
  };
  return (
    <div style={styles.container}>
      <div style={styles.title}>HackExam</div>
      <button style={styles.logoutButton} onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};

export default NavBar;

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw",
    height: "10vh",
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
  },
  title: {
    color: "#bd0320",
    fontSize: "3em",
    fontWeight: "bold",
    marginLeft: "20px",
  },
  logoutButton: {
    padding: "10px 20px",
    backgroundColor: "#bd0320",
    color: "#f0f0f0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "20px",
  },
};
