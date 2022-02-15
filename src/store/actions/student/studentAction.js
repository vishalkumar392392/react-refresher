import axios from '../../../axios';
import { studentActions } from '../../reducers/student-slice';

export const setStudentAction = () => {
    return function (dispatch) {
        axios.get("/students").then(res =>{
            dispatch(studentActions.setStudents({data:res.data}))
        }).catch(error => {
            console.log(error);
        })
    }
}

