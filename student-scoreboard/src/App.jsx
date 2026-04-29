import { useState } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";
import "./index.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Kabir", score: 32 },
    { id: 4, name: "Sara", score: 89 }
  ]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score)
    };

    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    const updated = students.map((student) =>
      student.id === id
        ? { ...student, score: Number(newScore) }
        : student
    );

    setStudents(updated);
  };

  return (
    <div className="container">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;
