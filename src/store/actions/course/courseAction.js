import axios from '../../../axios';

export const setCourses = () =>{
    return function (dispatch) {
        axios.get("/students/courses").then(res => {
            dispatch({type:"SET_COURSES", courses:res.data})
        }).catch(err => {
            console.log(err);
        })
    }
}