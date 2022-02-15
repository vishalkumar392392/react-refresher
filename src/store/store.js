import courseReducer from "./reducers/courseReducer";
import studentReducer from "./reducers/studentReducer";
import thunk from 'redux-thunk'
import {applyMiddleware, combineReducers, compose, createStore} from "redux"

const combineReducer = combineReducers({
    studentReducer:studentReducer,
    courseReducer:courseReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(combineReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;