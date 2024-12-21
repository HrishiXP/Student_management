// src/App.jsx
import React, { useState, useEffect } from "react";
import { getStudents } from "./utils/getStudents";
import StudentTable from "./components/StudentTable";
import StudentCard from "./components/StudentCard";
import Pagination from "./components/Pagination";

const App = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const pageSize = 10;

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudents(pageSize, currentPage);
      setStudents(data);
    };
    fetchStudents();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentPage]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>
      {isMobile ? <StudentCard students={students} /> : <StudentTable students={students} />}
      <Pagination
  currentPage={currentPage}
  totalPages={Math.ceil(20 / pageSize)} 
  onPageChange={setCurrentPage}
/>

    </div>
  );
};

export default App;
