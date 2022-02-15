import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    courses:[]
}

const courseSlice = createSlice({
    name:'course',
    initialState:initialState,
    reducers:{
        setCourses(state, action) {
            state.courses = action.payload.data?action.payload.data:[]
        }
    }
})
export const courseActions = courseSlice.actions;
export default courseSlice.reducer;