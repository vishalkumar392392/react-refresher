import { useEffect } from "react";
import React from "react";
import "./student.css";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import {setStudentAction} from '../../store/actions/student/studentAction'
import {setCourses} from '../../store/actions/course/courseAction'


function Student(props) {

  const dispatch = useDispatch();

  const students = useSelector(state => state.student.students)

  useEffect(() => {
    console.log("Student componenet");
    if(props.users == null || props.users.length === 0){
        // props.setStudents();
        dispatch(setStudentAction());
    }
    // props.setCourses();
    dispatch(setCourses())
  }, []);

  const headers = (
    <thead>
      <tr>
        {
          students[0] && Object.keys(students[0]).map((property) => {
            return <th key={property}>{property.toUpperCase()}</th>;
          })
        }
        <th>courses</th>
      </tr>
    </thead>
  );

  const rows = (
    <tbody>
      {students.map((stu) => {
        return (
          <tr key={stu.id}>
            <td>{stu.id}</td>
            <td>{stu.name}</td>
            <td>{stu.passport.number}</td>
            <td>
              <Link to={`/courses/${stu.id}`}>courses</Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <div>
      <div className="component-style">
        <table className="table table-bordered table-hover">
          {headers}
          {rows}
        </table>
      </div>
    </div>
  );
}


export default (Student);
