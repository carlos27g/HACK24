import React from "react";
import { Styles } from "../App";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const onLogout = () => {
    console.log("Logout Clicked");
  };
  const navigate = useNavigate();
  const handleTitleClick = () => {
    navigate("/");
  };
  return (
    <div style={styles.container}>
      <div style={styles.title} onClick={handleTitleClick}>
        EduVist
      </div>
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
    cursor: "pointer",
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
