import { type } from '@testing-library/user-event/dist/type';
import {v4 as uuidv4} from 'uuid';

//1. action items
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const SWITCH_TODO = 'SWITCH_TODO';

//2. action creators(1)
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    }
}

//2. action creators(2)
export const removeTodo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload,
    }
}

//2. action creators(3)
export const switchTodo = (payload) => {
    return {
        type: SWITCH_TODO,
        payload,
    }
}


//3. initial State => reducer를 구성할 때
const initialState = [
    {
        id: uuidv4(),
        title: "제목1",
        contents: "내용1",
        isDone: false,
    },
    {
        id: uuidv4(),
        title: "제목2",
        contents: "내용2",
        isDone: true,
    },
    {
        id: uuidv4(),
        title: "제목3",
        contents: "내용3",
        isDone: false,
    },
]


//4. reducer를 만들 것
const todos = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, action.payload]; 

        case REMOVE_TODO:
            return state.filter(item => item.id !== action.payload);

        case SWITCH_TODO:
            return state.map(item => {
                if(item.id === action.payload) {
                    return {...item, isDone: !item.isDone};
                }else{
                    return item;
                }
            });
            default:
                return state;

            
            
    }
        
}


//5. reducer를 export
export default todos;