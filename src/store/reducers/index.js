import { combineReducers } from "redux";
import theme from "./theme";
import searchReducer from "./searchReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
    theme, searchReducer, modalReducer
});

export default rootReducer