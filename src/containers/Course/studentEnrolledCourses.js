import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "../Student/student.css";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios";

function StudentEnrolledCourses(props) {
  const params = useParams();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`/students/${params.id}/courses`)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const res = (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Course</th>
          <th>Reviews</th>
          <th>Students Enrolled</th>
        </tr>
      </thead>

      <tbody>
        {courses.map((c) => {
          return (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>
                {" "}
                <Link to={`/courses/reviews/${c.id}`}>reviews</Link>
              </td>
              <td>
                {" "}
                <Link to={`/students/courses/${c.students.id}`}>students</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return <div className="component-style">{res}</div>;
}

export default StudentEnrolledCourses;
