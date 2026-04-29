import { useState } from "react";

function StudentRow({ student, updateScore }) {
  const [newScore, setNewScore] = useState(student.score);

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>

      <td>
        {student.score >= 40 ? (
          <span className="pass">PASS</span>
        ) : (
          <span className="fail">FAIL</span>
        )}
      </td>

      <td>
        <input
          type="number"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />

        <button
          onClick={() =>
            updateScore(student.id, newScore)
          }
        >
          Save
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;