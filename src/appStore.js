import { combineReducers, createStore } from "redux";
import { rulesReducer } from "./reducers/rules.reducer";

const appReducer = combineReducers({
  rules: rulesReducer,
});

const store = createStore(appReducer);

export default store;
