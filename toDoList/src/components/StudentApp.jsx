import React, { useState, useEffect, useMemo, useReducer, useRef } from "react";

// Reducer function to handle actions
const studentReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, { id: Date.now(), name: action.name, grade: action.grade }];
    case "EDIT_STUDENT":
      return state.map(student =>
        student.id === action.id ? { ...student, name: action.name, grade: action.grade } : student
      );
    case "DELETE_STUDENT":
      return state.filter(student => student.id !== action.id);
    default:
      return state;
  }
};

const StudentApp = () => {
  const [students, dispatch] = useReducer(studentReducer, []);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [editStudent, setEditStudent] = useState(null);
  const nameRef = useRef(null);
  const gradeRef = useRef(null);

  // Load students from localStorage
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students"));
    if (storedStudents) {
      dispatch({ type: "LOAD_STUDENTS", students: storedStudents });
    }
  }, []);

  // Save students to localStorage whenever the list changes
  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem("students", JSON.stringify(students));
    }
  }, [students]);

  // Calculate average grade using useMemo
  const averageGrade = useMemo(() => {
    if (students.length === 0) return 0;
    const totalGrade = students.reduce((sum, student) => sum + parseFloat(student.grade), 0);
    return totalGrade / students.length;
  }, [students]);

  const handleAddStudent = () => {
    if (name.trim() !== "" && grade.trim() !== "") {
      dispatch({ type: "ADD_STUDENT", name, grade });
      setName("");
      setGrade("");
      nameRef.current.focus();
    }
  };

  const handleEditStudent = () => {
    if (editStudent && name.trim() !== "" && grade.trim() !== "") {
      dispatch({ type: "EDIT_STUDENT", id: editStudent.id, name, grade });
      setEditStudent(null);
      setName("");
      setGrade("");
      nameRef.current.focus();
    }
  };

  const handleDeleteStudent = (id) => {
    dispatch({ type: "DELETE_STUDENT", id });
  };

  const handleEditClick = (student) => {
    setEditStudent(student);
    setName(student.name);
    setGrade(student.grade);
  };

  return (
    <div className="student-app">
      <div>
        <input
          ref={nameRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên sinh viên"
        />
        <input
          ref={gradeRef}
          type="number"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Điểm"
        />
        {editStudent ? (
          <button onClick={handleEditStudent}>Sửa điểm</button>
        ) : (
          <button onClick={handleAddStudent}>Thêm sinh viên</button>
        )}
      </div>

      <h3>Danh sách sinh viên</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>{student.name} - {student.grade} Điểm</span>
            <button onClick={() => handleEditClick(student)}>Sửa</button>
            <button onClick={() => handleDeleteStudent(student.id)}>Xoá</button>
          </li>
        ))}
      </ul>

      <h3>Điểm trung bình: {averageGrade.toFixed(2)}</h3>
    </div>
  );
};

export default StudentApp;
