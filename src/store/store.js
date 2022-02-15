import { configureStore } from "@reduxjs/toolkit";
import courseRe from './reducers/course-slice'
import studentRed from './reducers/student-slice'


const store = configureStore({
    reducer:{student:studentRed, course:courseRe}
})

export default store;