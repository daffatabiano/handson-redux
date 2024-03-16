import { legacy_createStore } from "redux";
import counterReducer from "./CounterReducer";

const store = legacy_createStore(counterReducer);

export default store;