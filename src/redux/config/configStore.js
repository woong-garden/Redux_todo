import { combineReducers, createStore } from 'redux';
import todos from '../modules/todos';

//1. rootReducer를 만들것이고 --> reducer들을 합칠 것
//modules 밑에 있는 여러 파일들이 반환하는 값
// 현재 : todos

const rootReducer = combineReducers({ //redux에 있는 combineReducers import
    todos,
})


//2. 이걸 이용해서 store를 만들 것(main)
const store = createStore(rootReducer);

//3. export 해서 다른 파일에서 import 할 수 있게 함
export default store
