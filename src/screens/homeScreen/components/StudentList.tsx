import React, { useState } from 'react';

const studentData = [
  { name: 'Mathilde Trösch', competencies: 22, progress: 10, status: 'Requires attention', picture: 'https://example.com/mathilde.jpg' },
  { name: 'Laura Frey', competencies: 25, progress: -45, status: 'Requires attention', picture: 'https://example.com/laura.jpg' },
  { name: 'Elias Baumann', competencies: 27, progress: 2, status: 'Requires attention', picture: 'https://example.com/elias.jpg' },
  { name: 'Randy Rodriguez', competencies: 30, progress: -60, status: 'Requires attention', picture: 'https://example.com/randy.jpg' },
  { name: 'Lisa Hauser', competencies: 43, progress: 40, status: 'On track', picture: 'https://example.com/lisa.jpg' },
];

const StudentList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = studentData.filter((student) => {
    return student.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <label>
        Search:
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
      </label>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Competenciesachieved</th>
            <th>Progress over semester</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) =>(
            <tr key={student.name}>
              <td><img src={student.picture} alt={student.name} className="profile-picture" /></td>
              <td>{student.name}</td>
              <td>{student.competencies}</td>
              <td>{student.progress}%</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
     </table>
    </div>
  );
};

const profilePictureStyles = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: '16px'
};

const StudentListWithProfilePicture = () => {
  return (
    <div>
      <style>{`
        .profile-picture {
          ${profilePictureStyles}
        }
      `}</style>
      <StudentList />
    </div>
  );
};

export default StudentListWithProfilePicture;