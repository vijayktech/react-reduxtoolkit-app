import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootReducers = combineReducers({
    indexReducer: taskReducer
});

export default rootReducers;