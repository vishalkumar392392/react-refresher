import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import axios from '../../../axios';
import * as actionTypes from '../../../store/actions/index';


function AddStudent(props) {

    const [name, setName] = useState('');
    const [passport, setPassport] = useState("");
    const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    if(name == null || name.length===0 || passport ===null || passport.length ===0){
        // window.location.href = "/students";
        return;
    }
    axios.post("/students",{name:name,passport:{id:"",number:passport}}).then(res=>{
        props.setStudents();
    }).catch(err => {
        console.log(err);
    })

    navigate("/students");

  }

  return (
    <div  className="component-style"> 
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Passport</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Passport"
            onChange={(e)=>setPassport(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStudents: () => dispatch(actionTypes.setStudentAction())
    }
}

export default connect(null,mapDispatchToProps)(AddStudent);
