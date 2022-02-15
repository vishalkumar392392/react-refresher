import { useEffect, useState } from "react";
import React from "react";
import "./student.css";
import { Link } from "react-router-dom";
import * as actionTypes from '../../store/actions/index';
import { connect } from "react-redux";

function Student(props) {
  const [students, setStudents] = useState([
    { id: 1, name: "vishal", gender: "male", courses: "" },
  ]);

  useEffect(() => {
    console.log("Student componenet");
    if(props.users == null || props.users.length === 0){
        props.setStudents();
    }
    props.setCourses();
  }, []);

  const headers = (
    <thead>
      <tr>
        {
          props.students[0] && Object.keys(props.students[0]).map((property) => {
            return <th key={property}>{property.toUpperCase()}</th>;
          })
        }
        <th>courses</th>
      </tr>
    </thead>
  );

  const rows = (
    <tbody>
      {props.students.map((stu) => {
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

const mapStateToProps = (state) =>{
    return {
        students : state.studentReducer.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStudents: () => dispatch(actionTypes.setStudentAction()),
        setCourses: () => dispatch(actionTypes.setCourses())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Student);
