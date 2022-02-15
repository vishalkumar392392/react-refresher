import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    students:[]
}

const studentSlice = createSlice({
    name:'student',
    initialState:initialState,
    reducers:{
        setStudents(state, action){
            state.students = action.payload.data?action.payload.data:[]
        }
    }
})

export const studentActions = studentSlice.actions;
export default studentSlice.reducer;