import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
  const total = students.length;

  const passed = students.filter(
    (student) => student.score >= 40
  ).length;

  const avg =
    students.reduce((sum, s) => sum + s.score, 0) / total;

  return (
    <>
      <div className="stats">
        <p>Total: {total}</p>
        <p>Passed: {passed}</p>
        <p>Average: {avg.toFixed(1)}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              updateScore={updateScore}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StudentTable;