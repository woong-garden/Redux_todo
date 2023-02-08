import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTodo } from '../modules/todos';
import {v4 as uuidv4} from 'uuid';

function Input() {

    const [title, setTitle] = useState('');
    const [contents, setContets] = useState('');

    const dispatch = useDispatch();

    const InputSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            id: uuidv4(),
            title: title,
            contents: contents,
            isDone: false
        }

        dispatch(addTodo(newTodo))

        setContets('');
        setTitle('');
    }

    const InputOnchangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const InputOnchangeContents = (event) => {
        setContets(event.target.value)
    }

    return (
        <StyledInputBox>
            <form onSubmit={InputSubmit}>
                제목: <input placeholder='제목을 입력해주세요!'onChange={InputOnchangeTitle} value={title}/>
                내용: <input placeholder='내용을 입력해주세요!' onChange={InputOnchangeContents} value={contents}/>
                <button type='submit'>추가</button>
            </form>
            
        </StyledInputBox>
    );
}

export default Input;

const StyledInputBox = styled.div`
    background-color: skyblue;
    padding: 20px;
`