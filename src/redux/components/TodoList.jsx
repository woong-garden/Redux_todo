import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, switchTodo } from '../modules/todos';
import { useNavigate } from 'react-router-dom';

function TodoList({ isActive }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteButton = (id) => {
        dispatch(removeTodo(id))
    }

    const handleSwitchButton = (id) => {
        dispatch(switchTodo(id))
    }

    //store에 있는 todos를 가져온다
    const todos = useSelector((state) => state.todos)
    return (
        <StyledListBox>
            <h4>{isActive ? '해야할일📌' : '완료👌'}</h4>
            {
                todos.filter(item => {
                    return item.isDone === !isActive
                })
                .map(item => {
                    return (
                        <StyledTodoBox key={item.id}>
                            <div style={{display: 'flex', justifyContent: 'space-between' }}>
                                <h4>{item.title}</h4>
                                <StyledDetaileButton onClick={() => {navigate(`/${item.id}`)}}>[상세보기]</StyledDetaileButton>
                            </div>
                            <div>{item.contents}</div>
                            <br/>
                            <StyledButton onClick={() => handleSwitchButton(item.id)}>{isActive ? '완료' : '취소'}</StyledButton>
                            <StyledButton onClick={() => handleDeleteButton(item.id)}>삭제</StyledButton>
                            
                        </StyledTodoBox>
                        
                    )
                })
            }
        </StyledListBox>
    );
}

export default TodoList;

const StyledListBox = styled.div`
    background-color: #f2f2f2;
    padding:20px;
`

const StyledTodoBox = styled.div`
background-color: #F6F6;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
`
const StyledButton = styled.button`
    background: deeppink;
    border: none;
    color: white;
    border-radius: 4px;
    margin-right: 10px;
    cursor: pointer;
    
`

const StyledDetaileButton = styled.button`
    background-color: transparent;
    border: none;
    font-weight: 700;
    cursor: pointer;
`