import {TodoApi} from "../Api/TodoAPI";

const ADD_TODO = "ADD_TODO";
const MAKE_TODO_IMPORTANT = "MAKE_TODO_IMPORTANT";
const DELETE_TODO = "DELETE_TODO";
const RUN_TODO = "RUN_TODO";
const SET_TODOS = "SET_TODOS";


let initialState = {
    todos: [{}],
    todosCount: 0
};


const profileReducer = (state = initialState, action) => {


    switch (action.type) {

        case ADD_TODO: {

            let newTodo = {
                todos : action.todos,
                todosCount: action.size
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        }
        case MAKE_TODO_IMPORTANT: {
            return {
                ...state
            };
        }

        case SET_TODOS: {
            debugger
            return {
                ...state,
                todos: [...action.todos.todos]
            }
        }

        case DELETE_TODO: {
            return {
                ...state
            }
        }

        case RUN_TODO: {
            return {
                ...state
            }
        }

        default:
            return state;
    }
};

//загрузка с сервера
export const setTodos = (todos) => {
    return {
        type: SET_TODOS,
        todos
    }
};


export const getTodos = () => {
    return (dispatch) => {
        TodoApi.getAllTodo().then(data => {
                console.log(data);
                dispatch(setTodos(data))
            }
        );
    };
};

export default profileReducer;