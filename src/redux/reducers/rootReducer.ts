import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer";

// This is just showercasing how reducers should be configured
// Import all reducers here and combine them

const rootReducer = combineReducers({
  login: loginReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
