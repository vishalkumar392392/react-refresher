const initialState = {
    courses:[]
}

const courseReducer = (state = initialState, action) => {

    switch(action.type) {
        case "SET_COURSES":
            console.log(action.courses);
            return {
                courses: [...action.courses]
            }
        
            default:
                return state;
    }
}

export default courseReducer;