import React from "react";

// Define TypeScript interfaces for your data
interface ExamDetail {
  score: number;
  maxScore: number;
}

interface ExamOverviewProps {
  additionOfFractions: ExamDetail;
  frenchVocabulary: ExamDetail;
  overallAverage: ExamDetail;
}

interface StudentDataProps {
  name: string;
  date: string;
  address: string;
  email: string;
  phone: string;
  status: string;
  primaryLanguage: string;
  examOverview: ExamOverviewProps;
  notes: string;
}

// StudentData component
const StudentData = ({ studentData }: { studentData: StudentDataProps }) => {
  return (
    <div className="student-data-container">
      <h2>{studentData.name}</h2>
      <p>Date: <span>{studentData.date}</span></p>
      <p>Address: <span>{studentData.address}</span></p>
      <p>Email: <span>{studentData.email}</span></p>
      <p>Phone: <span>{studentData.phone}</span></p>
      <p>Status: <span>{studentData.status}</span></p>
      <p>Primary Language: <span>{studentData.primaryLanguage}</span></p>
      <ExamOverview examOverview={studentData.examOverview} />
      <Notes notes={studentData.notes} />
    </div>
  );
};

// ExamOverview component
const ExamOverview = ({ examOverview }: { examOverview: ExamOverviewProps }) => {
  return (
    <div className="exam-overview-container">
      <h3>Exam Overview</h3>
      <p>Addition of Fractions: <span>{examOverview.additionOfFractions.score}/{examOverview.additionOfFractions.maxScore}</span></p>
      <p>French Vocabulary: <span>{examOverview.frenchVocabulary.score}/{examOverview.frenchVocabulary.maxScore}</span></p>
      <p>Overall Average: <span>{examOverview.overallAverage.score}/{examOverview.overallAverage.maxScore}</span></p>
    </div>
  );
};

// Notes component
const Notes = ({ notes }: { notes: string }) => {
  return (
    <div className="notes-container">
      <h3>Notes</h3>
      <p>{notes}</p>
    </div>
  );
};

// App component
const App = () => {
  const studentData: StudentDataProps = {
    name: "Laura Frey",
    date: "12.06.2015",
    address: "St. Jakob-Strasse 40, 9000 St. Gallen",
    email: "laura.frey@school.ch",
    phone: "+41 76 592 55 84",
    status: "Requires attention",
    primaryLanguage: "German",
    examOverview: {
      additionOfFractions: {
        score: 4.5,
        maxScore: 6,
      },
      frenchVocabulary: {
        score: 6,
        maxScore: 6,
      },
      overallAverage: {
        score: 5.25,
        maxScore: 6,
      },
    },
    notes: "Laura is struggling to focus in math class, the pace is too slow for her so she is easily distracted. Perhaps we can integrate her in the promotional course of Ms. Meyer or give her extra exercises?",
  };

  return (
    <div className="app-container">
      <StudentData studentData={studentData} />
    </div>
  );
};

export default App;
