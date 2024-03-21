import React, { useState } from 'react';
import { Styles } from "../../../App";
import { colors } from "../../../assets/colors";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const studentData = [
    { name: 'Mathilde Trösch', competencies: 22, progress: 10, status: 'Requires attention', picture: 'https://adrienzaradez.com/mathilde.png' },
    { name: 'Laura Frey', competencies: 25, progress: -45, status: 'Requires attention', picture: 'https://adrienzaradez.com/laura.png' },
    { name: 'Elias Baumann', competencies: 27, progress: 2, status: 'Requires attention', picture: 'https://adrienzaradez.com/elias.png' },
    { name: 'Hendrik Rodriguez', competencies: 30, progress: -60, status: 'Requires attention', picture: 'https://adrienzaradez.com/hendrik.png' },
    { name: 'Justin Hauser', competencies: 43, progress: 40, status: 'On track', picture: 'https://adrienzaradez.com/justin.png' },
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  let filteredStudents = studentData;
  if (searchInput.trim() !== '') {
    filteredStudents = studentData.filter(student =>
      student.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
        style={styles.searchBarDesign}
      />
      <div style={{...styles.rowContainer, ...styles.topRow}}>
        <div style={styles.firstColumn}>Name</div>
        <div style={styles.valueContainer}>Competencies</div>
        <div style={styles.valueContainer}>Progress</div>
        <div style={styles.valueContainer}>Status</div>
      </div>
      {filteredStudents.map((student, index) => (
        <div style={styles.rowContainer} key={index}>
            <div style={styles.firstColumn}><img style = {styles.pictureContainer} src={student.picture} alt={student.name} width="50" height="50" />{student.name}</div>
            <div style={styles.valueContainer}>{student.competencies}</div>
            <div style={styles.valueContainer}>{student.progress}</div>
            <div style={styles.valueContainer}>{student.status}</div>
        </div>
        ))}
      
    </div>
  );
};
const styles: Styles = {
    searchBarDesign: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.05)', // subtle shadow
        borderRadius: '5px', // rounded borders
        border: '1px solid #e0e0e0', // light border color
        padding: '10px 20px', // inner padding top/bottom, left/right
        outline: 'none', // remove focus outline
        width: '100%', // full-width
        height: '40px', // fixed height
        boxSizing: 'border-box', // include padding and border in the element's total width and height
        marginBottom: '20px', // bottom margin
    },
    tableDesign: {
        width: '100%',
    },
    tableHeadDesign: {
        width: '100%',
        marginTop: '20px',
        backgroundColor: colors.background, // Use the background color from your color scheme
        borderRadius: '10px', // Set the border radius to 10px
    },
    rowContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid black', // light border color
    },
    valueContainer: {
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topRow: {
        backgroundColor: colors.background,
    },
    firstColumn:{
        width: '40%',
        padding: '10px',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
    },
    pictureContainer: {
        margin: '10px',
        border: '3px solid red',
        display: 'flex',
        borderBlockColor: colors.primary,
        alignItems: 'center',
    },
    
}
export default SearchBar;
