import React from "react";

const StudentCard = ({ students }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student) => (
        <div key={student.rollNumber} className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Marks: {student.marks}</p>
          <p>Roll Number: {student.rollNumber}</p>
          <p>Class: {student.class}</p>
          <p>City: {student.city}</p>
          <p>Attendance: {student.attendance}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
