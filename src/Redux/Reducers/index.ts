import { combineReducers } from "redux";
import { FormReducer } from "./FormDetails";

export default combineReducers({
  forms: FormReducer,
});
