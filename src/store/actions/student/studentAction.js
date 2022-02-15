import axios from '../../../axios';


export const setStudentAction = () => {
    return function (dispatch) {
        axios.get("/students").then(res =>{
            dispatch({type:"SET_STUDENTS",students:res.data})
        }).catch(error => {
            console.log(error);
        })
    }
}

