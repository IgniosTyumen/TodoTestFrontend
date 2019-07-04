import {applyMiddleware, combineReducers, createStore} from "redux";
import todoListReducer from "./TodoListReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
        todo : todoListReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;