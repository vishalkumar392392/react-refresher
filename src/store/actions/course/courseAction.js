import axios from '../../../axios';
import { courseActions } from '../../reducers/course-slice';
export const setCourses = () =>{
    return function (dispatch) {
        axios.get("/students/courses").then(res => {
            dispatch(courseActions.setCourses({data:res.data}))
        }).catch(err => {
            console.log(err);
        })
    }
}