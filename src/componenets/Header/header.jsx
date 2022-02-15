import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <ul className="header-ul">
        <li>
          <NavLink
            style={{ color: "white" ,textDecoration:"none" }}
            to="/students"
            className="navlink"
          >
            Students
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ color: "white",textDecoration:"none" }}
            to="/courses"
            className="navlink"
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ color: "white",textDecoration:"none" }}
            to="/addstudent"
            className="navlink"
          >
            Add Student
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ color: "white",textDecoration:"none" }}
            to="/addcourses"
            className="navlink"
          >
            Add Course
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
