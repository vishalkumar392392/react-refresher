const initialState = {
    students:[]
}

const studentReducer = (state = initialState,action) =>{
    console.log(action);
    switch(action.type){
        case "SET_STUDENTS" :
            return {
                students : [...action.students]
            }
        default :
        return state;
    }
} 

export default studentReducer;