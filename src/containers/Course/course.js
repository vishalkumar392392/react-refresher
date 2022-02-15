import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios";
function Course (props) {

    const [courses, setCourses] = useState([]);
    const params = useParams();

    useEffect(()=>{
        if(params.id){
            axios
            .get(`/students/${params.id}/courses`)
            .then((res) => {
              setCourses(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
            
        }
    },[params.id])

    const res = (input) => (
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
            {input.map((c) => {
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
    
    return (
        <div className="component-style">
            {res(params.id?courses:props.courses)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        courses: state.courseReducer.courses
    }
}

export default connect(mapStateToProps,null)(Course);